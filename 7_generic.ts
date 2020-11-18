const arrayOfNumbers: Array<number> = [1, 3, 4, 5, 32];
const arrayOfStrings: Array<string> = ["Hello", "Typescript"];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
