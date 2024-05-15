import { Control, FieldError, UseFormRegister } from "react-hook-form";

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
export interface IPizzaBlockProps extends Omit<IPizza, "category, rating"> {}

// id: string;
// imageUrl: string;
// title: string;
// types: number[];
// sizes: number[];
// price: number;

export interface ICartItemProps {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
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
  name: RegExp;
  adress: RegExp;
  tel?: RegExp;
  email: RegExp;
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

export interface IInputsForm {
  name: string;
  adress: string;
  tel: number;
  email: string;
}

export interface IInputFormRHFProps {
  register: UseFormRegister<IInputsForm>;
	name: "name" | "adress" | "tel" | "email";
  title: string;
  required: string;
  minLength?: { value: number; message: string };
	pattern?: {value: RegExp; message: string};
	error:  FieldError | undefined;
	placeholder: string;
	isDirty: Boolean;
	control?: Control<IInputsForm, any>;
}
