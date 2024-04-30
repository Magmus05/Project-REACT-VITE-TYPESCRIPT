export interface IPizza {
	id: string;
	imageUrl:string;
	title:string;
	types: number[];
	sizes: number[];
	price: number;
	category: number;
	rating: number;
}

export interface ISortName {
	name: string;
	sortProperty: string;
}

export interface IRegex {
	name: string;
  adress: string;
  tel: string;
  email: string;
}

export interface ICategoriesProps {
	categoryId: number;
	setCategoryId: any;
}
export interface ICartItemProps {
	id: string;
	imageUrl:string;
	title:string;
	type: number;
	size: number;
	price: number;
	count: number;
}
export interface IPizzaBlockProps {
	id: string;
	imageUrl:string;
	title:string;
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
