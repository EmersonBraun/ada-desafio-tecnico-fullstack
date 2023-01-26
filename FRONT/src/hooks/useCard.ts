import { useCallback } from "react";
import api from "../services/API";
import { CardData, LoginResponse } from "../types";

export function useCard() {
  const authToken = localStorage.getItem("@ADA:token") || "";

  const login = useCallback(async (): Promise<LoginResponse> => {
    const { DEFAULT_LOGIN, DEFAULT_PASSWORD } = import.meta.env;
    const { data } = await api.post("/login", {
      login: DEFAULT_LOGIN || "letscode",
      senha: DEFAULT_PASSWORD || "lets@123",
    });
    localStorage.setItem("@ADA:token", data.token);
    return data;
  }, []);

  const getAllCard = useCallback(async (): Promise<CardData[]> => {
    if (!authToken) {
      await login();
    }

    const { data } = await api.get("/cards");

    if (data.statusCode === 401) {
      await login();
      return getAllCard();
    }

    return data;
  }, []);

  const createCard = useCallback(
    async (dataCard: CardData): Promise<CardData> => {
      if (!authToken) {
        await login();
      }

      const { data } = await api.post("/cards", dataCard);

      if (data.statusCode === 401) {
        await login();
        return createCard(dataCard);
      }

      return data;
    },
    []
  );

  const updateCard = useCallback(
    async (id: string, dataCard: CardData): Promise<CardData> => {
      if (!authToken) {
        await login();
      }

      const { data } = await api.put(`/cards/${id}`, dataCard);

      if (data.statusCode === 401) {
        await login();
        return updateCard(id, dataCard);
      }

      return data;
    },
    []
  );

  const deleteCard = useCallback(async (id: string): Promise<CardData> => {
    if (!authToken) {
      await login();
    }

    const { data } = await api.delete(`/cards/${id}`);

    if (data.statusCode === 401) {
      await login();
      return deleteCard(id);
    }

    return data;
  }, []);

  return {
    getAllCard,
    createCard,
    updateCard,
    deleteCard,
  };
}
