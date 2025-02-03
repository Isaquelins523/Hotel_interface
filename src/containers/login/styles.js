import styled from "styled-components";
import backgroud from "../../assets/background.webp";

export const Container = styled.div`
  background-image: url(${backgroud});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Filtro de escuridão (opacidade) */
    z-index: -1; /* Garante que o fundo escurecido não sobreponha os outros elementos */
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 2rem;
  text-align: center;
  position: absolute;
  top: 20px;
`;

export const Form = styled.form`
  background: rgba(
    255,
    255,
    255,
    0.8
  ); /* Cor de fundo branca com transparência */
  padding: 20px;
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombras para dar profundidade */
  width: 300px; /* Largura do formulário */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Button = styled.button``;
