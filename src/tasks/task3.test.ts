import { expect, test } from 'vitest'
import { organizeInventory, type Inventory } from './task3.js'

test('should organize inventory with multiple categories and items', () => {
  const inventory: Inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]
  
  const expected = {
    toys: {
      doll: 5,
      car: 5  // 3 + 2
    },
    sports: {
      ball: 2,
      racket: 4
    }
  }
  
  expect(organizeInventory(inventory)).toEqual(expected)
})

test('should sum quantities of duplicate items in the same category', () => {
  const inventory: Inventory = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]
  
  const expected = {
    education: {
      book: 15  // 10 + 5
    },
    art: {
      paint: 3
    }
  }
  
  expect(organizeInventory(inventory)).toEqual(expected)
})

test('should return an empty object for empty inventory', () => {
  const inventory: Inventory = []
  expect(organizeInventory(inventory)).toEqual({})
})

test('should handle single item inventory', () => {
  const inventory: Inventory = [
    { name: 'puzzle', quantity: 1, category: 'games' }
  ]
  
  expect(organizeInventory(inventory)).toEqual({
    games: {
      puzzle: 1
    }
  })
})

test('should handle items with zero quantity', () => {
  const inventory: Inventory = [
    { name: 'doll', quantity: 0, category: 'toys' },
    { name: 'car', quantity: 0, category: 'toys' },
    { name: 'car', quantity: 2, category: 'toys' }
  ]
  
  expect(organizeInventory(inventory)).toEqual({
    toys: {
      doll: 0,
      car: 2  // 0 + 2
    }
  })
})

test('should handle items with the same name in different categories', () => {
  const inventory: Inventory = [
    { name: 'ball', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 5, category: 'sports' },
    { name: 'ball', quantity: 2, category: 'toys' }
  ]
  
  expect(organizeInventory(inventory)).toEqual({
    toys: {
      ball: 5  // 3 + 2
    },
    sports: {
      ball: 5
    }
  })
})