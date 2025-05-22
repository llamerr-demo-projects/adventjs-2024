import { expect, test } from 'vitest'
import { organizeShoes, type Shoe } from './task5.js'

test('should pair boots of the same size with one left and one right', () => {
  const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  const result = organizeShoes(shoes)
  expect(result).toEqual([38, 42])
})

test('should handle multiple pairs of the same size', () => {
  const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]
  
  const result = organizeShoes(shoes)
  expect(result).toEqual([38, 38])
})

test('should return empty array when no pairs are found', () => {
  const shoes: Shoe[] = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
  ]
  
  const result = organizeShoes(shoes)
  expect(result).toEqual([])
})

test('should handle empty input', () => {
  const shoes: Shoe[] = []
  const result = organizeShoes(shoes)
  expect(result).toEqual([])
})

test('should handle multiple sizes with multiple pairs', () => {
  const shoes: Shoe[] = [
    { type: 'I', size: 38 }, { type: 'R', size: 38 }, // pair 1 size 38
    { type: 'I', size: 39 }, { type: 'R', size: 39 }, // pair 1 size 39
    { type: 'I', size: 38 }, { type: 'R', size: 38 }, // pair 2 size 38
    { type: 'I', size: 40 }, { type: 'I', size: 40 }, // no pair
    { type: 'R', size: 39 }, { type: 'I', size: 39 }  // pair 2 size 39
  ]
  
  const result = organizeShoes(shoes)
  expect(result).toEqual([38, 39, 38, 39])
})

test('should handle large number of shoes', () => {
  const shoes: Shoe[] = []
  const expected: number[] = []
  
  // Create 100 pairs of size 42
  for (let i = 0; i < 100; i++) {
    shoes.push({ type: 'I', size: 42 })
    shoes.push({ type: 'R', size: 42 })
    expected.push(42)
  }
  
  // Add some unpaired shoes
  shoes.push({ type: 'I', size: 43 })
  shoes.push({ type: 'I', size: 44 })
  
  const result = organizeShoes(shoes)
  expect(result).toEqual(expected)
})