let number = [2,8,4,5,7,1,6,9,3,5,7,5];


// for loop
let result = [];
for(let i=0;i<=number.length-1;i++){
    result.push(number[i]);
}
console.log(result);


// for in
let result2 = [];
for(let num in number){
    num = number[num]*2;
    result2.push(num);
}
console.log(result2);


//for of
let result3 = [];
for(let num of number){
    if(number[num]%2==0){
        result3.push(number[num]);
    }
}
console.log(result3);


// for Each
let result4 = [];
number.forEach((item)=>{
    let output = item*3;
    result4.push(output);
});
console.log(result4);