import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MESSAGES, STATUS } from "../../constants";
import { useCard } from "../../hooks/useCard";
import { CardData, UpdateCardData } from "../../types";
import { Card } from "../Card";
import { List } from "../List";
import { NewCard } from "../NewCard";
import { BoardContainer, Container } from "./styles";

export const Board = () => {
  const [cardList, setCardList] = useState<any>();

  const { getAllCard, createCard, updateCard, deleteCard } = useCard();

  useEffect(() => {
    getCardList();
  }, []);

  const getCardList = async () => {
    const listData: any = {};
    const response = await getAllCard();

    STATUS.forEach((status: string) => {
      listData[status] = response.filter((card) => card.lista === status);
    });

    setCardList(listData);
  };

  const validate = (card: CardData) => {
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

  const handleAddCard = async (card: CardData) => {
    if (!validate(card)) return;

    const data = await createCard(card);
    if (data) {
      toast.success(MESSAGES.CARD_CREATED);
      getCardList();
      return;
    }
    toast.error(MESSAGES.CARD_CREATE_ERROR);
  };

  const handleUpdate = async (card: UpdateCardData) => {
    if (!card.id) return;
    if (!validate(card)) return;

    const data = await updateCard(card.id, card);
    if (data) {
      toast.success(MESSAGES.CARD_UPDATED);
      getCardList();
      return;
    }
    toast.error(MESSAGES.CARD_UPDATE_ERROR);
  };

  const handleDelete = async (card: UpdateCardData) => {
    if (card.id) {
      const data = await deleteCard(card.id);
      if (data) {
        toast.success(MESSAGES.CARD_DELETED);
        getCardList();
        return;
      }
      toast.error(MESSAGES.CARD_DELETE_ERROR);
    }
  };

  return (
    <BoardContainer>
      <Container>
        <List status="Nova Tarefa">
          <NewCard onHandleAddCard={handleAddCard} />
        </List>
        {STATUS.map((status: string) => (
          <List key={status} status={status}>
            {!!cardList?.[status]?.length &&
              cardList[status].map((card: UpdateCardData) => (
                <Card
                  key={card.id}
                  data={card}
                  onHandleUpdate={handleUpdate}
                  onHandleDelete={handleDelete}
                />
              ))}
          </List>
        ))}
      </Container>
    </BoardContainer>
  );
};
