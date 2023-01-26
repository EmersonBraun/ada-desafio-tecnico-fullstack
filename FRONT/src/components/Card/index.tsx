import { useState } from "react";
import {
  FaTrash,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaSave,
  FaBan,
} from "react-icons/fa";
import { UpdateCardData } from "../../types";
import * as Styled from "./styles";
import { DISPLAY_MODE, STATUS_LABELS } from "../../constants";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

interface CardProps {
  data: UpdateCardData;
  onHandleUpdate: (card: UpdateCardData) => void;
  onHandleDelete: (card: UpdateCardData) => void;
}

const Card = ({ data, onHandleUpdate, onHandleDelete }: CardProps) => {
  const { id, titulo, conteudo, lista } = data;
  const [viewMode, setViewMode] = useState(DISPLAY_MODE);
  const [changedTitle, setChangedTitle] = useState(titulo);
  const [changedContent, setEditedContent] = useState(conteudo);

  const hasFoward = lista !== STATUS_LABELS.DONE;
  const hasBackward = lista !== STATUS_LABELS.TODO;
  const isDisplayMode = viewMode === DISPLAY_MODE;

  const handleCancel = () => {
    setEditedContent(conteudo);
    setChangedTitle(titulo);
    setViewMode(DISPLAY_MODE);
  };

  const handleSave = () => {
    onHandleUpdate({
      id,
      titulo: changedTitle,
      conteudo: changedContent,
      lista,
    });
    setViewMode(DISPLAY_MODE);
  };

  const changeToNextList = () => {
    const nextList =
      lista === STATUS_LABELS.TODO ? STATUS_LABELS.DOING : STATUS_LABELS.DONE;
    return {
      id,
      titulo: changedTitle,
      conteudo: changedContent,
      lista: nextList,
    };
  };

  const changeToBackwardList = () => {
    const nextList =
      lista === STATUS_LABELS.DONE ? STATUS_LABELS.DOING : STATUS_LABELS.TODO;
    return {
      id,
      titulo: changedTitle,
      conteudo: changedContent,
      lista: nextList,
    };
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <CardHeader
          isDisplayMode={isDisplayMode}
          titulo={titulo}
          setViewMode={setViewMode}
          changedTitle={changedTitle}
          setChangedTitle={setChangedTitle}
        />
      </Styled.Header>
      <CardContent
        isDisplayMode={isDisplayMode}
        conteudo={conteudo}
        setEditedContent={setEditedContent}
        changedContent={changedContent}
      />
      <Styled.ButtonsContainer>
        {isDisplayMode ? (
          <>
            <Styled.ClickableIcon
              disabled={!hasBackward}
              onClick={() => onHandleUpdate(changeToBackwardList())}
            >
              <FaChevronCircleLeft size={20} />
            </Styled.ClickableIcon>
            <Styled.ClickableIcon onClick={() => onHandleDelete(data)}>
              <FaTrash size={20} />
            </Styled.ClickableIcon>
            <Styled.ClickableIcon
              disabled={!hasFoward}
              onClick={() => onHandleUpdate(changeToNextList())}
            >
              <FaChevronCircleRight size={20} />
            </Styled.ClickableIcon>
          </>
        ) : (
          <>
            <Styled.ClickableIcon onClick={handleCancel}>
              <FaBan size={20} />
            </Styled.ClickableIcon>
            <Styled.ClickableIcon onClick={handleSave}>
              <FaSave size={20} />
            </Styled.ClickableIcon>
          </>
        )}
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

export default Card;
