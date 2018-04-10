var a = parseInt(prompt('insert number',))
var b = parseInt(prompt('insert second number',))

console.log('your number "a" is:', a)
console.log('your number "b" is:', b)

function addNumbers (x, y) {
    return x + y
}

console.log('The sum of your numbers is:', addNumbers(a, b))