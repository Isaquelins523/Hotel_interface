import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import {
  Container,
  Title,
  HotelList,
  HotelItem,
  HotelImage,
  DeleteButton,
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

  const handleDelete = async (hotelId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Erro: Usuário não autenticado!");
      return;
    }

    if (!window.confirm("Tem certeza que deseja excluir este hotel?")) {
      return;
    }

    try {
      await api.delete(`/hotels/${hotelId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove o hotel deletado da lista
      setHotels(hotels.filter((hotel) => hotel._id !== hotelId));

      toast.success("Hotel excluído com sucesso!");
    } catch (error) {
      toast.error("Erro ao excluir o hotel");
      console.error(error);
    }
  };
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
              {hotel.imageUrl && (
                <HotelImage
                  src={`http://localhost:5000${hotel.imageUrl}`}
                  alt={`Imagem do hotel ${hotel.name}`}
                />
              )}
              <strong>{hotel.name}</strong> - {hotel.location} - R${" "}
              {hotel.price}
              <br />
              <small>Publicado por: {hotel.user?.name || "Desconhecido"}</small>
              <DeleteButton onClick={() => handleDelete(hotel._id)}>
                Excluir
              </DeleteButton>
            </HotelItem>
          ))}
        </HotelList>
      )}
    </Container>
  );
};

export default Hotels;
