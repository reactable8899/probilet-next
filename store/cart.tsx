import { create } from "zustand";
import { IEquipmentAttrs } from "@/types/equipment.types";

type CartStore = {
  cardData: IEquipmentAttrs[];
  add: (data: IEquipmentAttrs) => void;
  remove: (id: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cardData: [],
  add: (data: IEquipmentAttrs) =>
    set((state) => {
      if (state.cardData.find((el) => el.id === data.id)) {
        return {
          cardData: state.cardData.map((el) => {
            if (el.id === data.id) {
              return {
                ...el,
                count: el.count + 1,
              };
            }
            return el;
          }),
        };
      } else {
        return {
          cardData: [...state.cardData, { ...data, count: 1 }],
        };
      }
    }),
  remove: (id: number) =>
    set((state) => {
      return {
        cardData: state.cardData.filter((el) => el.id !== id),
      };
    }),
  clear: () =>
    set(() => {
      return {
        cardData: [],
      };
    }),
}));
