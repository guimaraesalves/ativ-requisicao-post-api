import { Container } from "./style";

export const Display = ({ status }) => {
  return (
    <Container>
      {status === "OK" ? (
        <h3>Requisição completa!</h3>
      ) : (
        <h2>A Requisição falhou.</h2>
      )}
    </Container>
  );
}


