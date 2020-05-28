let exp = 0;
let operator;

function resetRes(value){
    document.querySelector('#res').innerHTML = "" ;
    exp = 0 ;
    operator = "" ;
}

function updateRes(value){
    document.querySelector('#res').innerHTML += value ;
}

function splitExp(exp , operator){
    let operands = exp.split(operator);
    let op1 = parseInt(operands[0], 2);
    let op2 = parseInt(operands[1], 2);

    let operation = "";

    switch(operator){
        case "+" : operation = add;
        break;
        case "-" : operation = subtract;
        break;
        case "*" : operation = multiply;
        break;
        case "/" : operation = divide;
        break;
        default: break
    }

    let result = ""

    if(operation !== divide && operation !== ""){
        //storing result after converting decimal integer to binary result
        result = calculator(op1, op2, operation).toString(2) 
        console.log("it's me "+result)
    }
    else if(operation === divide){
        result = Math.floor(calculator(op1, op2, operation)).toString(2)
        console.log(result)
    }

    resetRes();
    updateRes(result);
}


function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2) ;
}


document.querySelector('#btnEql').addEventListener('click', function(){
    exp = document.querySelector('#res').innerHTML
    console.log(exp)
    splitExp(exp , operator);
})

document.querySelector('#btnClr').addEventListener('click', resetRes)

document.querySelector('#btn0').addEventListener('click', function(){
    updateRes("0")
})

document.querySelector('#btn1').addEventListener('click', function(){
    updateRes("1")
})

document.querySelector('#btnSum').addEventListener('click', function(){
    updateRes("+")
    operator = "+"
})

document.querySelector('#btnSub').addEventListener('click', function(){
    updateRes("-")
    operator = "-"
})

document.querySelector('#btnMul').addEventListener('click', function(){
    updateRes("*")
    operator = "*"
})

document.querySelector('#btnDiv').addEventListener('click', function(){
    updateRes("/")
    operator = "/"
})



