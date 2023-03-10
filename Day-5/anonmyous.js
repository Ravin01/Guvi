//print odd numbers in an array
function printOddNumbers(mixArr) {
    for (let i = 0; i < mixArr.length; i++) {
      if (mixArr[i] % 2 === 1) {
        console.log(mixArr[i]);
      }
    }
  }
  const mixArr = [1, 2, 3, 4, 5];
  printOddNumbers(mixArr);
  




//convert all string to title caps in a array
let sentence = 'This is Ravin';
let title = function () {
    let empty = [];
    for (let i = 0; i <= sentence.length - 1; i++) {
        empty.push(sentence[i].toUpperCase());
    }
    return empty.join(' ');
};
console.log(title());





//sum of all numbers in a array
let array = [5, 8, 6, 4, 2, 5, 4];
let findSum = function () {
    let sum = 0;
    for (let number of array) {
        sum = sum + number;
    }
    return sum;
};
console.log(findSum());





//check the number is prime number or not an  prime numbers

// function primeNumber(num){
//     for(let i=2;i<num;i++){
//         if(((num%i) !== 0) && (num > 2)){
//             return `Given number ${num} is a prime Number`;
//         }
//     }
//     return `Given number ${num} not is a prime Number`;
// };
// console.log(primeNumber(8));






//print all prime number
let primeNumber = function () {
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

let palindromeNum = function (num) {
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








//return median of two sorted array
let medianArray = [];
let findMedianSortedArrays = function (arr1, arr2) {
    const merged = arr1.concat(arr2).sort((a, b) => a - b);
    const n = merged.length;
    const middleIndex = Math.floor(n / 2);
    if (n % 2 === 0) {
        return (merged[middleIndex - 1] + merged[middleIndex]) / 2;
    } else {
        return merged[middleIndex];
    }
}
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
medianArray.push(findMedianSortedArrays(arr1, arr2));
console.log(medianArray);
  









//remove duplicate element from an array
let removeDuplicates = function (arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

const arr = [1, 2, 2, 3, 3, 3, 4, 5, 5];
console.log(removeDuplicates(arr));













//rotate an array by k times
let rotateArray = function (arrBy, k) {
    const rotations = k % arrBy.length;
    const rotated = arrBy.slice(rotations).concat(arrBy.slice(0, rotations));
    return rotated;
  };
  let arrBy = [1, 2, 3, 4, 5];
  const k = 2;
  console.log(rotateArray(arrBy, k)); 





