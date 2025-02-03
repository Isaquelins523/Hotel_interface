import { useEffect, useState } from "react";
import { api } from "../../services/api";

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
    <div>
      <h1>Lista de Hotéis</h1>

      {loading ? (
        <p>Carregando hotéis...</p>
      ) : hotels.length === 0 ? (
        <p>Nenhum hotel encontrado.</p>
      ) : (
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel._id}>
              <strong>{hotel.name}</strong> - {hotel.location} - R${" "}
              {hotel.price}
              <br />
              <small>Publicado por: {hotel.user?.name || "Desconhecido"}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Hotels;
