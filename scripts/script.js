var numbers=document.getElementsByName("number"),
    operations=document.getElementsByName("operation"),
    decimalBtn=document.getElementById('decimal'),
    results=document.getElementById("result"),
    c=document.getElementById("c"),
    p=document.getElementById("pl_mn"),
    display=document.getElementById('display'),
    memoryCurrentNum=0,
    memoryNewNum=false,
    memoryPendingOperation='';
for(var i=0; i<numbers.length; i++){
    var number=numbers[i];
    number.addEventListener('click', function(e){
        numberPress(e.target.textContent)
    });
}
for(var i=0; i<operations.length; i++){
    var operationBtn=operations[i];
    operationBtn.addEventListener('click', function(e){
        operation(e.target.textContent);
    });
}
c.addEventListener('click', clear);
results.addEventListener('click',result);
decimalBtn.addEventListener('click', decimal);
p.addEventListener('click', plusMinus);


function numberPress(num){
    if(memoryNewNum){
        display.value=num;
        memoryNewNum=false;
    }
    else{
        if(display.value==='0'){
        display.value=num;
    } else{
        display.value+=num;
    }
    }
}
function operation(op){
    var localOperationMemory=display.value;
    if(memoryNewNum && memoryPendingOperation !== '='){
        display.value=memoryCurrentNum;
    }
    else{
       memoryNewNum=true;
        if(memoryPendingOperation==='+'){
            memoryCurrentNum+=parseFloat(localOperationMemory);
        }
        else if(memoryPendingOperation==='-'){
            memoryCurrentNum-=parseFloat(localOperationMemory);
        }
        else if(memoryPendingOperation==='*'){
            memoryCurrentNum*=parseFloat(localOperationMemory);
        }
        else if(memoryPendingOperation==='/'){
            memoryCurrentNum/=parseFloat(localOperationMemory);
        }

        else{
            memoryCurrentNum=parseFloat(localOperationMemory);
        }
        display.value=memoryCurrentNum;
        memoryPendingOperation=op;
    }
}
function decimal(){
 var localDecimalMemory=display.value;
    if(memoryNewNum){
        localDecimalMemory='0.';
        memoryNewNum=false;
    }
    else{
        if(localDecimalMemory.indexOf('.') == -1){
            localDecimalMemory+='.';
        }
    }

    display.value=localDecimalMemory;
}
function plusMinus() {
    var localDecimalMemory = display.value*-1;
    display.value = localDecimalMemory;
}

function clear(){
var localDecimalMemory='0';
    display.value=localDecimalMemory;
}



