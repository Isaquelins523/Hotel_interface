import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {
  Container,
  Title,
  HotelList,
  HotelItem,
  LoadingMessage,
  NoHotelsMessage,
} from "./styles";

export const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await api.get("/hotels");
        setHotels(response.data);
      } catch (error) {
        console.error("Erro ao buscar hotéis:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return (
    <Container>
      <Title>Lista de Hotéis</Title>

      {loading ? (
        <LoadingMessage>Carregando hotéis...</LoadingMessage>
      ) : hotels.length === 0 ? (
        <NoHotelsMessage>Nenhum hotel encontrado.</NoHotelsMessage>
      ) : (
        <HotelList>
          {hotels.map((hotel) => (
            <HotelItem key={hotel._id}>
              <strong>{hotel.name}</strong> - {hotel.location} - R${" "}
              {hotel.price}
              <br />
              <small>Publicado por: {hotel.user?.name || "Desconhecido"}</small>
            </HotelItem>
          ))}
        </HotelList>
      )}
    </Container>
  );
};

export default Hotels;
