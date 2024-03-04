export const sortNames = [
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
export const regex = {
  name: "^[А-Яа-яёa-zA-Z \\-]+$",
  adress: "^[А-Яа-яёa \\[0-9] \\-]+$",
  tel: "^(8|\\+7)[\\- ]?[\\(]?\\d{3}[\\)]?[\\- ]?\\d{3}[\\- ]?\\d{2}[\\- ]?\\d{2}$", //идеалка, а не регулярка
};

export const categories = [
  "Всё меню",
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Шаурма",
  "Чуду",
];