import { expect, test } from 'vitest'
import { createFrame } from './task2.js'

test('should create a frame with multiple names of different lengths', () => {
  const names = ['midu', 'madeval', 'educalvolpz']
  const expected = '***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************'
  expect(createFrame(names)).toBe(expected)
})

test('should create a frame with a single name', () => {
  const names = ['midu']
  const expected = '********\n* midu *\n********'
  expect(createFrame(names)).toBe(expected)
})

test('should create a frame with names of increasing length', () => {
  const names = ['a', 'bb', 'ccc']
  const expected = '*******\n* a   *\n* bb  *\n* ccc *\n*******'
  expect(createFrame(names)).toBe(expected)
})

test('should handle an empty array by returning an empty frame', () => {
  const names: string[] = []
  const expected = '****\n****'  // Just the corners with no content
  expect(createFrame(names)).toBe(expected)
})

test('should handle names with spaces correctly', () => {
  const names = ['hello world', 'test name', 'a']
  const expected = '***************\n* hello world *\n* test name   *\n* a           *\n***************'
  expect(createFrame(names)).toBe(expected)
})

test('should handle empty strings in the array', () => {
  const names = ['', 'a', 'bb', '']
  const expected = '******\n*    *\n* a  *\n* bb *\n*    *\n******'
  expect(createFrame(names)).toBe(expected)
})