import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

export const HotelList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
`;

export const HotelItem = styled.li`
  background: #fff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  strong {
    font-size: 1.2rem;
    color: #222;
  }

  small {
    color: #666;
    margin-top: 5px;
  }
`;

export const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: #888;
`;

export const NoHotelsMessage = styled.p`
  font-size: 1.2rem;
  color: #d9534f;
  font-weight: bold;
`;

export const HotelImage = styled.img`
  width: 120px;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 10px;
  object-fit: cover;
`;
