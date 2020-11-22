// const str: string ='Hello'

// console.log(str);

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello Typescript";

const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3, 4, 5];

const words: string[] = ["Hello", "Typescript"];

////////////Tuple

const contact: [string, number] = ["Roma", 88005553535];

///////////Any

let variable: any = 34;
//....
variable = "Value";

/////////// Functions

function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Heisenberg");

//Never

// function throwError(message:string):never {
// throw new Error(message)
// }

// throwError('Oops')

//////////////Type

type Login = string;

const login: Login = "admin";

type ID = string | number;

const id1: ID = 1234;
const id2: ID = "1234";

type SomeType = string | null | undefined;
