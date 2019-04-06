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
