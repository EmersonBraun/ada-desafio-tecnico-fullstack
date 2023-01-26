import * as Styled from "./styles";

interface ListProps {
  status: string;
  children: React.ReactNode;
}

const List = ({ status, children }: ListProps) => {
  return (
    <Styled.Container>
      <Styled.Title>{status}</Styled.Title>
      <Styled.UL>{children}</Styled.UL>
    </Styled.Container>
  );
};

export default List;
