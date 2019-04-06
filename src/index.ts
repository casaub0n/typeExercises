export const isPositive = (num: number):boolean => {
  return num >= 0
}

interface User {
  name: string
  age: number
  private_: boolean
}

export const showUserInfo = (user: User):string => {return "OK!"}

type IsPositiveFunc = (arg: number) => boolean
export const isPositiveFunc: IsPositiveFunc = num => num >= 0

export const sumOfPos = (arr: number[]) => {
  return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

export const myFilter = <T>(arr: T[], predicate: (elm: T) => boolean): T[] => {
  const result = [];
  for (const elm of arr) {
    if (predicate(elm)) {
      result.push(elm);
    }
  }
  return result;
}
