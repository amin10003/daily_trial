console.log('hello world!')
 //Challenge 1


 function sumOfSum(arr){
    // return num1 + num2 + num3
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
 }
const result = sumOfSum([2,34,54,56])

console.log(result)


//challenge 1

function reversedstring(str){
    let resversed = ""
    for(let i = str.length -1 ; i >= 0; i --){
        resversed += str[i]
    }

    return resversed
}

const reversedResult = reversedstring('Hi World!')

console.log(reversedResult)


