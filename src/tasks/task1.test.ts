import { expect, test } from 'vitest'
import { prepareGifts } from './task1.js'

test('should remove duplicates and sort the gifts in ascending order', () => {
  const gifts = [3, 1, 2, 3, 4, 2, 5]
  const preparedGifts = prepareGifts(gifts)
  expect(preparedGifts).toEqual([1, 2, 3, 4, 5])
})

test('should handle multiple duplicates correctly', () => {
  const gifts = [6, 5, 5, 5, 5]
  const preparedGifts = prepareGifts(gifts)
  expect(preparedGifts).toEqual([5, 6])
})

test('should return an empty array for empty input', () => {
  const gifts: number[] = []
  const preparedGifts = prepareGifts(gifts)
  expect(preparedGifts).toEqual([])
})

test('should handle single element array', () => {
  const gifts = [42]
  const preparedGifts = prepareGifts(gifts)
  expect(preparedGifts).toEqual([42])
})

test('should handle negative numbers correctly', () => {
  const gifts = [-3, -1, -2, -3, -4, -2, -5]
  const preparedGifts = prepareGifts(gifts)
  expect(preparedGifts).toEqual([-5, -4, -3, -2, -1])
})

test('should handle mixed positive and negative numbers', () => {
  const gifts = [0, -1, 1, -2, 2, 0, -1, 1]
  const preparedGifts = prepareGifts(gifts)
  expect(preparedGifts).toEqual([-2, -1, 0, 1, 2])
})