import { expect, test } from 'vitest'
import { createXmasTree } from './task4.js'

test('should create a christmas tree with height 5 and * ornament', () => {
  const expected = `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`
  
  expect(createXmasTree(5, '*')).toBe(expected)
})

test('should create a christmas tree with height 3 and + ornament', () => {
  const expected = `__+__
_+++_
+++++
__#__
__#__`
  
  expect(createXmasTree(3, '+')).toBe(expected)
})

test('should create a christmas tree with height 6 and @ ornament', () => {
  const expected = `_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____`
  
  expect(createXmasTree(6, '@')).toBe(expected)
})

test('should create a minimal tree with height 1', () => {
  const expected = `*
#
#`
  
  expect(createXmasTree(1, '*')).toBe(expected)
})

test('should handle different ornament characters', () => {
  const expected = `_X_
XXX
_#_
_#_`
  
  expect(createXmasTree(2, 'X')).toBe(expected)
})

test('should handle height of 0 by returning just the trunk', () => {
  const expected = `#
#`
  
  expect(createXmasTree(0, '*')).toBe(expected)
})