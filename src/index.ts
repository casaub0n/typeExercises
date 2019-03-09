export const isPositive = (num: number):boolean => {
  return num >= 0
}

interface User {
  name: string
  age: number
  private_: boolean
}

export const showUserInfo = (user: User):string => {return "OK!"}

export const sumOfPos = (arr: number[]) => {
  return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}