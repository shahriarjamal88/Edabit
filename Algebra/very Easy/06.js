/*
Miserable Parody of a Calculator
Create a function that will handle simple math expressions. The input is an expression in the form of a string.

Examples
calculator("23+4") ➞ 27

calculator("45-15") ➞ 30

calculator("13+2-5*2") ➞ 5

calculator("49/7*2-3") ➞ 11
*/
function str(calculator){

    return eval(calculator)
}
console.log(str("23+4"))
console.log(str("45-15"))
console.log(str("13+2-5*2"))
console.log(str("49/7*2-3"))