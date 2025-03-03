console.log("Program 1:")
const isEligibleToVote = (age) => {
    if(age > 18) return "Eligible to Vote"
    else{
        return "Not Eligible to vote"
    }
 }
 console.log(isEligibleToVote(20)) 
console.log(isEligibleToVote(18)) 
console.log(isEligibleToVote(17)) 

console.log("---- ---- ----")
console.log("Program 2:")

const isGreater = (a, b) => {
    if(a>b) return `${a} is greater than ${b}`
    else return `${b} is greater than ${a}`
}
console.log(isGreater(2, 5))
console.log(isGreater(10, 5))

console.log("---- ---- ----")
console.log("Program 3:")

const checkNum = (n) => {
  if(n>=0) return "Positive Number"
  else return "Negative number"
}
console.log(checkNum(9))
console.log(checkNum(-8))
console.log(checkNum(22))

console.log("---- ---- ----")
console.log("Program 4:")
const isEvenOdd = (n) => {
    if(n%2 === 0) return "Even Number"
    else return "Odd Number"
}
console.log(isEvenOdd(5)) 
console.log(isEvenOdd(8))
console.log(isEvenOdd(10))

console.log("---- ---- ----")
console.log("Program 5:")

const checkForAlphabetA = (str) => {
    if(str.includes('a') || str.includes('A'))
        return "Includes a"
    else return "Does not includes a"
}
console.log(checkForAlphabetA("Tanay")) 
console.log(checkForAlphabetA("Jeep"))  
console.log(checkForAlphabetA("Jane"))

console.log("---- ---- ----")
console.log("Program 6:")
const checkLength = (str) => {
    if(str.length > 5){
        return "more than 5 characters"
    }
    else{
        return "less than 5 characters"
    }
}
console.log(checkLength("Programming"))  
console.log(checkLength("Jeep"))

console.log("---- ---- ----")
console.log("Program 7:")
const isBetweenOneAndTen = (num) => {
    if(num >= 1 && num <= 10){
        return "True"
    }
    else{
        return "False"
    }
}

console.log(isBetweenOneAndTen(5))
console.log(isBetweenOneAndTen(11))

console.log("---- ---- ----")
console.log("Program 8:")
const isHelloPresent = (str) => {
    if(str.toLowerCase().includes('hello')) return true
    else return false
} 
console.log(isHelloPresent("Hello World"))
console.log(isHelloPresent("World"))

console.log("---- ---- ----")
console.log("Program 9:")
const isMultipleOfThree = (num) => {
    if(num%3 === 0){
        return true
    }
    else{
        return false
    }
}
console.log(isMultipleOfThree(5))
console.log(isMultipleOfThree(9))

console.log("---- ---- ----")
console.log("Program 10:")

const multiplyByTen = (num) => {
    return num*10
}
console.log(multiplyByTen(20))
console.log(multiplyByTen(40))

console.log("---- ---- ----")
console.log("Program 11:")
const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
  }

  const {title, price, description} = product
  console.log(title)
console.log(price)
console.log(description)

console.log("---- ---- ----")
console.log("Program 12:")

const book = {title: "n", author: "j", pages: 122}

const getBookDetails = (book) => {
    if(book.pages > 100){
        return true
    }
    else{
        return false
    }
}
console.log(getBookDetails(book))
console.log("---- ---- ----")
console.log("Program 13:")

const person = { name: 'Amit', age: 25, occupation: 'Software Engineer' }
const changeOccupation = (person, newOccupation) => {
 person.occupation = newOccupation
}
console.log(person); 
changeOccupation(person, 'Product Manager');
console.log(person);

console.log("---- ---- ----")
console.log("Program 14:")

const numbers = [1, 2, 3];
const [a, b, c] = numbers
console.log(a)
console.log(b)
console.log(c)

console.log("---- ---- ----")
console.log("Program 15:")


const defaultParamsFunc = (a, b, c = 4) => a*b*c
console.log(defaultParamsFunc(3, 1))
console.log(defaultParamsFunc(3, 10))