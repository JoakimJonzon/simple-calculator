function appendValue(value) {

    let display = document.getElementById('display');
    display.value += value;

}

function clearDisplay(){

    let display = document.getElementById('display');
    display.value="";

}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value= eval(display.value);
    }catch (error) {
        display.value ="Error";
    }

}

function backspace(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);

}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];
    
    if (validKeys.includes(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        event.preventDefault(); 
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});

