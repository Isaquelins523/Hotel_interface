import styled from "styled-components";
import backgroud from "../../assets/backgroundHotel2.svg";

export const Container = styled.div`
  background-image: url(${backgroud});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 2rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  width: 100%;
  max-width: 400px;
  background: #d3d3d3;

  p {
    color: #fa8072;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: black;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 52px;
  border: 0;
  border-radius: 5px;
  background-color: #4682b4;
  font-family: "Road Rage", serif;
  font-size: 30px;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.9;
  }
`;
