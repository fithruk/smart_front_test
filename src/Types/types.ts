interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

type FormStateType = {
  value: string;
  key: "email" | "name" | "phone" | "username" | null;
};

export { type User, type FormStateType };
