import {ISortName, IRegex} from "../types/Types"


export const sortNames: ISortName[] = [
  {
    name: `популярности ↑`,
    sortProperty: "rating",
  },
  {
    name: "популярности ↓",
    sortProperty: "-rating",
  },
  {
    name: "цене ↑",
    sortProperty: "price",
  },
  {
    name: "цене ↓",
    sortProperty: "-price",
  },
  {
    name: "алфавиту ↑",
    sortProperty: "title",
  },
  {
    name: "алфавиту ↓",
    sortProperty: "-title",
  },
];
export const regex: IRegex = {
  name: /^[А-Яа-яёa-zA-Z \\-]+$/,
  adress: /^[a-zA-Zа-яА-Я.,\-\s]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

export const categories: string[] = [
  "Всё меню",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Шаурма",
  "Чуду",
];