 let myFunctions = require  ('./functions')

test ('returnTwo should equal 2', () => {
    expect(myFunctions.returnTwo()).toBe(2)
} )

test ('greeting test', () => {
    expect(myFunctions.greeting(' James')).toBe('Hello, James')
})

test ('greeting test', () => {
    expect(myFunctions.greeting(' Jill')).toBe('Hello, Jill')
})
test ('add test', () => {
    expect(myFunctions.add(1, 2)).toBe(3)
})