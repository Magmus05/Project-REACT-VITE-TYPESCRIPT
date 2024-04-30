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
  name: "^[А-Яа-яёa-zA-Z \\-]+$",
  adress: "^[А-Яа-яёa \\[0-9] \\-]+$",
  tel: "^(8|\\+7)[\\- ]?[\\(]?\\d{3}[\\)]?[\\- ]?\\d{3}[\\- ]?\\d{2}[\\- ]?\\d{2}$", //идеалка, а не регулярка
  email: "^\\S+@\\S+\\.\\S+$",
};

export const categories: string[] = [
  "Всё меню",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Шаурма",
  "Чуду",
];