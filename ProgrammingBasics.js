const myArray = [];
const amountOfNumbers = 40;
let number;
for (let i = 10; i <= amountOfNumbers; i++) {
  myArray.push(i);
}
for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
    if (myArray[i] % 3 === 0 && myArray[i] % 5 === 0) {
      console.log("Jackpot!");
    } else if (myArray[i] % 3 === 0) {
      console.log("Divisible by 3!");
    } else if (myArray[i] % 5 === 0) {
      console.log("Divisible by 5!");
    }
  }
}
