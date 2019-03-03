import { isPositive, showUserInfo } from './index'

test('数値を受け取ってそれが0以上ならtrueになるか', () => {
  expect(isPositive(3)).toBe(true)
})

class User {
  name: string
  age: number
  private_: boolean
  constructor(name: string, age: number, private_: boolean) {
    this.name = name
    this.age = age
    this.private_ = private_
  }
}

const personA = new User('A', 18, false)

test('オブジェクトの型でUserが持てるか', () => {
  expect(showUserInfo(personA)).toBe("OK!")
})
