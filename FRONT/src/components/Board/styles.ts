import styled from "styled-components";

export const BoardContainer = styled.main`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  @media screen and (max-width: 992px) {
    body {
      flex-direction: column;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  width: 92%;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  border-radius: 8px;
  background: ${(props) => props.theme["gray-600"]};

  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    height: calc(100% - 10rem);
  }
`;
