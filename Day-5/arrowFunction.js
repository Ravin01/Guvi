//print odd number in an array
const printOddNumbers = (arr) => {
    arr.forEach((num) => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
const arr = [1, 2, 3, 4, 5];
printOddNumbers(arr);







//convert all string to tittle caps in a string array
let sentence = 'This is Ravin';
let title = ()=> {
    let empty = [];
    for (let i = 0; i <= sentence.length - 1; i++) {
        empty.push(sentence[i].toUpperCase());
    }
    return empty.join(' ');
};
console.log(title());







//sum of all numbers in a array
let array = [5, 8, 6, 4, 2, 5, 4];
let findSum = ()=> {
    let sum = 0;
    for (let number of array) {
        sum = sum + number;
    }
    return sum;
};
console.log(findSum());











//print all prime number
let primeNumber = ()=> {
    let num = [];
    let isPrime;
    for (let i = 2; i <= 100; i++) {
        isPrime = 1;
        for (let j = 2; j <= (i / 2); j++) {
            if ((i % j) == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime == 1) {
            num.push(i);
        }
    }
    console.log(num);
};
primeNumber();











//return all palindromes in array

let palindromeNum = (num)=> {
    var numStr = num.toString().split('');
    var reverseStr = numStr.reverse().join('');
    return num.toString() === reverseStr;
};
let palindromeArray = [];
for (var i = 1; i <= 100; i++) {
    if (palindromeNum(i)) {
        palindromeArray.push(i);
    }
};
console.log(palindromeArray);

