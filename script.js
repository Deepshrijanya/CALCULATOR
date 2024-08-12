let ans = document.querySelector('#ans');
let digits = document.querySelectorAll('.digits');
let operations = document.querySelectorAll('.operations');

digits.forEach(v => {
    v.addEventListener('click',clickHandler);
});
operations.forEach(v => {
    v.addEventListener('click',operationsHandler);
});

let operand1 = 0;
let operator = "";
let isNew = false;

function operationsHandler(e){
    if(e.target.innerText == 'AC'){
        ans.innerText = 0;
    }
    if(e.target.innerText == '='){
        let operand2 = parseInt(ans.innerText);
        if(operator == '+')
            ans.innerText = operand1 + operand2;
        if(operator == '-')
            ans.innerText = operand1 - operand2;
        if(operator == '*')
            ans.innerText = operand1 * operand2;
        if(operator == '/')
            ans.innerText = operand1 / operand2;

        operator = "";//so that repeated clicking of equalsto will not give repeated results;
        isNew = true;
    }
    else{ // +,-,*,/
        operand1 = parseInt(ans.innerText);
        operator = e.target.innerText;
        isNew = true;        
    }
}
function clickHandler(e){
    let target = e.target;
    if(ans.innerText == '0')
        ans.innerText = "";
    if(isNew == true){
        ans.innerText = "";
        isNew = false;
    }
    ans.innerText += target.innerText;
}