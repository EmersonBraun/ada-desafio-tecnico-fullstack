import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { MESSAGES, STATUS_LABELS } from "../../constants";
import { CardData } from "../../types";
import Input from "../Input";
import TextArea from "../TextArea";
import * as Styled from "./styles";

interface NewCardProps {
  onHandleAddCard: (card: CardData) => void;
}

const NewCard = ({ onHandleAddCard }: NewCardProps) => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  const validate = (card: Partial<CardData>) => {
    if (!card.titulo) {
      toast.error(MESSAGES.TITLE_REQUIRED);
      return false;
    }
    if (!card.conteudo) {
      toast.error(MESSAGES.CONTENT_REQUIRED);
      return false;
    }
    return true;
  };

  const adicionar = () => {
    if (!validate({ titulo, conteudo })) return;
    onHandleAddCard({ titulo, conteudo, lista: STATUS_LABELS.TODO });
    setTitulo("");
    setConteudo("");
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Input
          value={titulo}
          placeholder="Título"
          onChange={(evt) => setTitulo(evt.target.value)}
        />
      </Styled.Header>
      <Styled.EditContent>
        <TextArea
          value={conteudo}
          placeholder="Conteúdo"
          onChange={(e) => setConteudo(e.target.value)}
        />
      </Styled.EditContent>
      <Styled.ButtonsContainer>
        <Styled.ClickableIcon onClick={adicionar}>
          <FaPlusCircle size={20} />
        </Styled.ClickableIcon>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

export default NewCard;
