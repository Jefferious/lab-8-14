let myFunctions = require('./functions')

test('Return Two test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('Greeting to return input', () => {
    expect(myFunctions.greeting('James')).toBe('Hello, James.');
    expect(myFunctions.greeting('Jill')).toBe('Hello, Jill.');
})

test('Add test', () => {
    expect(myFunctions.add(1, 2)).toEqual(3);
    expect(myFunctions.add(5, 9)).toEqual(14);
})

describe('Math functions', () => {
    test('Add', () => {
        expect(myFunctions.add(3, 92)).toBe(95)
    })
    test("Subtract", () => {
        expect(myFunctions.subtract(14, 3)).toBe(11)
    })
    test("Multiply", () => {
        expect(myFunctions.multiply(5, 3)).toBe(15)
    })
    test("Divide", () => {
        expect(myFunctions.divide(20, 5)).toBe(4)
    })
})