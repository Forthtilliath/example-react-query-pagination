declare global {
  type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

  type User = {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
  };
}

export {};
