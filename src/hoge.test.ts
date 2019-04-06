import { isPositive, showUserInfo, isPositiveFunc } from './index'

test('数値を受け取ってそれが0以上ならtrueになるか', () => {
  expect(isPositive(3)).toBe(true)
})

const personA = {name: 'B', age: 18, private_: false}

test('オブジェクトの型でUserが持てるか', () => {
  expect(showUserInfo(personA)).toBe("OK!")
})

test('数値を受け取ってそれが0以上ならtrue、0未満ならfalse', () => {
  expect(isPositiveFunc(5)).toBe(true)
  expect(isPositiveFunc(-1)).toBe(false)
})
