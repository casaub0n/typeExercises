export const isPositive = (num: number):boolean => {
  return num >= 0
}

interface User {
  name: string
  age: number
  private_: boolean
}

export const showUserInfo = (user: User):string => {return "OK!"}

const f: (arg1: number) => boolean = isPositive
// export const isPositiveFunc: IsPositiveFunc = num => num >= 0
