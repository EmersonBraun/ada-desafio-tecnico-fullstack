import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { MESSAGES, STATUS_LABELS } from "../../constants";
import { CardData } from "../../types";
import Input from "../Input";
import { TextArea } from "../TextArea";
import { Container, ButtonsContainer, ClickableIcon } from "./styles";

interface NewCardProps {
  onHandleAddCard: (card: CardData) => void;
}

export const NewCard = ({ onHandleAddCard }: NewCardProps) => {
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
    <Container>
      <Input
        value={titulo}
        placeholder="Título"
        onChange={(evt) => setTitulo(evt.target.value)}
      />
      <TextArea
        value={conteudo}
        placeholder="Conteúdo"
        onChange={(e) => setConteudo(e.target.value)}
      />
      <ButtonsContainer>
        <ClickableIcon onClick={adicionar}>
          <FaPlusCircle size={22} />
        </ClickableIcon>
      </ButtonsContainer>
    </Container>
  );
};
