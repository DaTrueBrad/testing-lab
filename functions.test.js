const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions')
describe('Part Two Functions', () => {
    test('Check to see if it returns the number two', () => expect(returnTwo()).toBe(2))
    test('Check the greeting', () => expect(greeting('Brady')).not.toBeNaN())
})


describe('Math Functions', () => {
    test('add two numgers together', () => {
        expect(add(40, 2)).toBe(42)
        expect(add(17, 3)).toBe(20)
        expect(add(40, 40)).toBe(80)
        expect(add(7, 14)).toBe(21)
        expect(add(1, 2)).toBe(3)
    })
    test('multiply two numbers together', () =>{
        expect(multiply(10,10)).toBe(100)
        expect(multiply(5,2)).toBe(10)
        expect(multiply(6,4)).toBe(24)
        expect(multiply(8,3)).toBe(24)
        expect(multiply(4,2)).toBe(8)
    })
    test('Divide two numbers', () =>{
        expect(divide(10,10)).toBe(1)
        expect(divide(4,2)).toBe(2)
        expect(divide(25,5)).toBe(5)
        expect(divide(100,4)).toBe(25)
        expect(divide(8,4)).toBe(2)
    })
    test('subtract two numbers', () =>{
        expect(subtract(100,10)).toBe(90)
        expect(subtract(70,28)).toBe(42)
        expect(subtract(33,3)).toBe(30)
        expect(subtract(65,12)).toBe(53)
        expect(subtract(10,5)).toBe(5)
    })
})