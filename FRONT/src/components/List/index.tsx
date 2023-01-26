import { Container, Title, UL } from "./styles";

interface ListProps {
  status: string;
  children: React.ReactNode;
}

export const List = ({ status, children }: ListProps) => {
  return (
    <Container>
      <Title>{status}</Title>
      <UL>{children}</UL>
    </Container>
  );
};
