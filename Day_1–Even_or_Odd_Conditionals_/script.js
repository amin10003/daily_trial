console.log('conditional and modulo')

function checkIfEven(num){
if(num % 2 === 0){
    console.log(`${num} is even number`)
}else{
    console.log(`${num} is odd number`)
}
}

checkIfEven(72)

// let num = 11;

const checkOdd = (num)=>{
    return num % 2 !== 0 ? `${num} is an Odd number` : `${num} is an Even number` 
}

console.log(checkOdd(43))