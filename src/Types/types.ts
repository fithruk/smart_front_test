interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

type SearchDataType = {
  key: "email" | "name" | "phone" | "username";
  value: string;
};

type FormStateType = [SearchDataType] | [];

export { type User, type FormStateType, type SearchDataType };
