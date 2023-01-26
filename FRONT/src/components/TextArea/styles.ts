import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
  width: 98%;
  height: 100px;
  text-align: center;
  padding: 5px;
  border-radius: 8px;
  border: none;
  letter-spacing: 1px;
  overflow: hidden;
  background: ${(props) => props.theme["gray-300"]};
`;
