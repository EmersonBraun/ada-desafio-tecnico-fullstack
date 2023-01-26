import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  padding: 10px;
  margin: 8px;
  align-items: center;
  border: 1px solid ${(props) => props.theme["gray-400"]};
`;

export const UL = styled.ul`
  width: 100%;
  gap: 12px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Title = styled.h3`
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
  width: 100%;
  text-align: center;

  margin-bottom: 5px;
  color: ${(props) => props.theme["yellow-500"]};
`;
