console.log('welcome to the second day of daily trail!')

function  compareTwoNumbers
(num1,num2){
    if (num1 === num2){
        return `Both Numbers are equal : ${num1} and ${num2}`
    } else if(num1 > num2){
        return `${num1} is greater than ${num2}`
    }else{
        return `${num2} is greater than ${num1}`
    }
}

let result = compareTwoNumbers(7,7)
console.log(result)