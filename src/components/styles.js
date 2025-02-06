import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  background-color: #4682b4;
`;

export const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1rem;
  }
  a:hover {
    text-decoration: underline;
  }
`;
