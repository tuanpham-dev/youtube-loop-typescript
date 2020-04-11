import timeFormat from '../src/utils/timeFormat'

test('timeFormat function', () => {
  expect(timeFormat(12)).toBe('0:12')
  expect(timeFormat(123)).toBe('2:03')
  expect(timeFormat(3945)).toBe('1:05:45')
})