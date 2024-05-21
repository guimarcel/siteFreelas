import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  margin: 10px auto;
  gap: 10px;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    width: 80%;
    background-color: var(--black);
    color: var(--background);
    font-weight: bold;
    height: 40px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  transition: transform 0.3s ease;
  border-radius: 100px;

  &:hover {
    transform: scale(1.1);
  }
`;
