import { Container } from "./style";

function Display({ status }) {
  return (
    <Container color={statusText === "OK" ? "green" : "red"}>
      {status === "OK" ? (
        <h2>Requisição completa</h2>
      ) : (
        <h2>Requisição falhou</h2>
      )}
    </Container>
  );
}

export default Display;
