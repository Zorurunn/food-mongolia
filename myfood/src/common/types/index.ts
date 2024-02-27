import { Dispatch, SetStateAction } from "react";

export type foodType = {
  _id?: string;
  name: string;
  ingredients: string;
  imgPath: string;
  price: number;
  discount: number;
  category: string;
  countity?: number;
};
export type basketType = {
  _id?: string;
  name: string;
  ingredients: string;
  imgPath: string;
  price: number;
  discount: number;
  category: string;
  countity?: number;
};

export type SignInProps = {
  email: string;
  password: string;
};
export type SignUpProps = {
  name: string;
  address: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export type UserType = {
  address: string;
  email: string;
  name: string;
  password?: string;
  phoneNumber: string;
  _id?: string;
};
export type userUpdateProps = {
  // address: string;
  email: string;
  name: string;
  phoneNumber: string;
};
export type userUpdatePasswordType = {
  email: string;
};
export type changePasswordType = {
  otp: string;
  email: string;
  newPassword: string;
};

export type categoryType = {
  _id?: string;
  name: string;
};
export type nameIdType = {
  _id?: string;
  name: string;
};

export type addCartType = {
  food: foodType;
  countity: number;
};

export type selectCategoryTypes = {
  selectedCategory: categoryType | undefined;
  setSelectedCategory: Dispatch<SetStateAction<categoryType>>;
};
export type setTypeBoolean = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};
export type confirmType = {
  title: string;
  deleteCategory: (props: categoryType) => Promise<void>;
};
