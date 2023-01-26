import { Container, Title, UL } from "./styles";

interface ListProps {
  status: string;
  children: React.ReactNode;
}

export const List = ({ status, children }: ListProps) => {
  return (
    <Container data-testid="list">
      <Title>{status}</Title>
      <UL>{children}</UL>
    </Container>
  );
};
