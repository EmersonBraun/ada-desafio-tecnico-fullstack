import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px;
  align-items: center;
  justify-content: center;
  list-style: none;
  border-radius: 8px;
  background: ${(props) => props.theme["gray-700"]};
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: ${(props) => props.theme["green-700"]};

  &:hover {
    color: ${(props) => props.theme["green-500"]};
  }
`;

export const ClickableIcon = styled.span`
  cursor: pointer;
`;
