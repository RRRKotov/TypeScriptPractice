interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;

let qwe: PersonKeys = "name";
qwe = "age";

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">;
type UserKeysNoMeta2 = Pick<User, "name" | "email">;

let u1: UserKeysNoMeta1='name'