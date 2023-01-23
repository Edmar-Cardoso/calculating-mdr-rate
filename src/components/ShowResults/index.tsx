import { Container } from "./style";

const ShowResults = () => {
  return (
    <Container>
      <div>
        <h3>Você receberá:</h3>
        <p>
          Amanhã: <span>R$100,00</span>
        </p>
        <p>
          Em 15 dias: <span>R$100,00</span>
        </p>
        <p>
          Em 30 dias: <span>R$100,00</span>
        </p>
        <p>
          Em 45 dias: <span>R$100,00</span>
        </p>
      </div>
    </Container>
  );
};

export default ShowResults;
