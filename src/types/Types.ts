export interface IPizza {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}
export interface IpizzaSlice {
  items: IPizzaBlockProps[];
  status: "loading" | "success" | "error";
  searchValue: string;
  item: IPizza | null;
}
export interface ISortName {
  name: string;
  sortProperty: "rating" | "-rating" | "price" | "-price" | "title" | "-title";
}

export interface IRegex {
  name: string;
  adress: string;
  tel: string;
  email: string;
}

export interface ICartItemProps {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
}
export interface IPizzaBlockProps {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
}

export interface IInputFormProps {
  type: string;
  name: string;
  title: string;
  placeholder: string;
  minLength: number;
  maxLength: number;
  pattern?: string;
}

export interface IcartSlice {
  totalCount: number;
  totalPrice: number;
  items: ICartItemProps[];
}

export interface IfilterSlice {
  categoryId: number;
  sort: ISortName;
}
export interface IinfotooltipSlice {
  isOpen: boolean;
  title: string;
  name: string;
}



