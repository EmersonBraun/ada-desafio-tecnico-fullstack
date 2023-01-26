import styled from "styled-components";

export const InputContainer = styled.input`
  width: 98%;
  text-align: center;
  padding: 5px;
  border-radius: 8px;
  border: none;
  letter-spacing: 1px;
  background: ${(props) => props.theme["gray-300"]};
`;
