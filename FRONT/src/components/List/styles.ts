import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  border-right: 1px solid silver;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const UL = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  padding: 10px;
  border-bottom: 1px solid silver;
  width: 100%;
  text-align: center;
  margin-bottom: 5px;
`;

export { Container, UL, Title };
