import { isPositive, showUserInfo, sumOfPos, myFilter } from './index'

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

test('数値の配列を受け取って、その0以上の値の和の値を返す関数', () => {
  expect(sumOfPos([1, 3, -2, 0])).toBe(4)
})

test('配列の中で2の倍数のみの配列を作る関数', () => {
  expect(myFilter([1, 2, 3, 4, 5], num => num % 2 === 0)).toEqual([2, 4])
})
