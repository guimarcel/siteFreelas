import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  padding: 0.45rem;
  margin-top: 30px;
  border-radius: 60px;
  background: var(--background);
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  transition: opacity 0.2s ease;
  font-weight: bold;
  color: var(--white);
  cursor: ${({ loading }) => (loading ? "progress" : "pointer")};

  &:hover {
    opacity: 0.7;
  }

  span {
    font-size: 1rem;
  }
`;
