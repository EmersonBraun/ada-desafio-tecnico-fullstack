import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 200px;
  gap: 2px;
  padding: 12px;
  align-items: center;
  justify-content: center;
  list-style: none;
  border-radius: 8px;
  background: ${(props) => props.theme["gray-700"]};
`;

export const Header = styled.div`
  display: flex;
  width: 98%;
  text-align: center;
  justify-content: center;
  padding: 5px;
  border-radius: 8px;
  border: none;
  letter-spacing: 1px;
  background: ${(props) => props.theme["gray-300"]};
`;

export const Title = styled.h4`
  flex: 1;
  text-align: center;
  padding: 6px;
  overflow: hidden;

  color: ${(props) => props.theme["green-700"]};
`;

export const Content = styled.div`
  width: 98%;
  height: 100px;
  text-align: center;
  padding: 5px;
  border-radius: 8px;
  border: none;
  letter-spacing: 1px;
  word-break: break-all;
  overflow: auto;
  color: ${(props) => props.theme["green-500"]};
  background: ${(props) => props.theme["gray-300"]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 10px;
  color: ${(props) => props.theme["green-500"]};
`;

export const ClickableIcon = styled.span<{ disabled?: boolean }>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  .FaTrashIcon,
  .FaBanIcon {
    color: ${(props) => props.theme["red-700"]};

    &:hover {
      color: ${(props) => props.theme["red-500"]};
    }
  }
  .FaLeftIcon,
  .FaRightIcon,
  .FaSaveIcon {
    color: ${(props) => props.theme["green-700"]};

    &:hover {
      color: ${(props) => props.theme["green-500"]};
    }
  }
`;
