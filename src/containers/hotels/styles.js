import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 3.125rem;
`;

export const HotelList = styled.ul`
  padding: 0;
  max-width: 800px;
  max-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 80%;

    .navbar {
      display: none;
    }
  }
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
  width: 300px;
  height: 220px;
  border-radius: 8px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const DeleteButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #4682b4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #c9302c;
  }
`;
