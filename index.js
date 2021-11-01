//1
function greatestOfTwo(num1, num2){
  if (num1 > num2) {return (num1)}
  else if (num1 = num2) {return (num1)}
  else {return (num2) }
}

//2
function greatestOfThree(num1, num2, num3){
  if (num1 > num2 && num1 > num3) {return (num1)}
 else if (num2 > num1 && num2 > num3) {return (num2)}
 else {return (num3)}
}

//3
function greatestOfFour(num1, num2, num3, num4){
  if (num1 > num2 && num1 > num3 && num1 > num4) {return (num1)}
  else if (num2 > num1 && num2 > num3 && num2 > num4) {return (num2)}
  else if (num3 > num1 && num3 > num2 && num3 > num4) {return (num3)}
  else {return (num4)}
}


//4
function leastOfFour(num1, num2, num3, num4){
  if (num1 < num2 && num1 < num3 && num1 < num4) {return (num1)}
  else if (num2 < num1 && num2 < num3 && num2 < num4) {return (num2)}
  else if (num3 < num1 && num3 < num2 && num3 < num4) {return (num3)}
  else {return (num4)}
}

console.log(greatestOfTwo(2, 4))
console.log(greatestOfThree(3, 6, 9))
console.log(greatestOfFour(2, 8, 9, 10))
console.log(leastOfFour(1, 4, 5, 4))
