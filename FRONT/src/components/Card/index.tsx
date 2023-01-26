import { useState } from "react";
import {
  FaTrash,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaSave,
  FaBan,
} from "react-icons/fa";
import { UpdateCardData } from "../../types";
import { DISPLAY_MODE, STATUS_LABELS } from "../../constants";
import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { Container, Header, ButtonsContainer, ClickableIcon } from "./styles";

interface CardProps {
  data: UpdateCardData;
  onHandleUpdate: (card: UpdateCardData) => void;
  onHandleDelete: (card: UpdateCardData) => void;
}

export const Card = ({ data, onHandleUpdate, onHandleDelete }: CardProps) => {
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
    <Container data-testid="card">
      <Header>
        <CardHeader
          isDisplayMode={isDisplayMode}
          titulo={titulo}
          setViewMode={setViewMode}
          changedTitle={changedTitle}
          setChangedTitle={setChangedTitle}
        />
      </Header>
      <CardContent
        isDisplayMode={isDisplayMode}
        conteudo={conteudo}
        setEditedContent={setEditedContent}
        changedContent={changedContent}
      />
      <ButtonsContainer>
        {isDisplayMode ? (
          <>
            <ClickableIcon
              disabled={!hasBackward}
              onClick={() => hasBackward && onHandleUpdate(changeToBackwardList())}
            >
              <FaChevronCircleLeft className="FaLeftIcon" size={20} />
            </ClickableIcon>
            <ClickableIcon onClick={() => onHandleDelete(data)}>
              <FaTrash className="FaTrashIcon" size={20} />
            </ClickableIcon>
            <ClickableIcon
              disabled={!hasFoward}
              onClick={() => hasFoward && onHandleUpdate(changeToNextList())}
            >
              <FaChevronCircleRight className="FaRightIcon" size={20} />
            </ClickableIcon>
          </>
        ) : (
          <>
            <ClickableIcon onClick={handleCancel}>
              <FaBan className="FaBanIcon" size={20} />
            </ClickableIcon>
            <ClickableIcon onClick={handleSave}>
              <FaSave className="FaSaveIcon" size={20} />
            </ClickableIcon>
          </>
        )}
      </ButtonsContainer>
    </Container>
  );
};
