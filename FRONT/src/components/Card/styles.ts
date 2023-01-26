import styled from "styled-components";

const Container = styled.li`
  min-width: 200px;
  padding: 10px;
  list-style: none;
  margin: 5px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: 15rem;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid silver;
`;

const Title = styled.h4`
  flex-grow: 1;
  text-align: center;
  padding: 5px;
`;

const Content = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  min-height: 100px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid silver;
  padding: 8px;
`;

const EditContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClickableIcon = styled.span<{ disabled?: boolean }>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export {
  Container,
  Header,
  Title,
  Content,
  ButtonsContainer,
  EditContent,
  ClickableIcon,
};
