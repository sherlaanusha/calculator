const display = document.querySelector('#display');
function appendtodisplay(input){
    display.value += input;
}
function clearDisplay(){
display.value = '';
}
function calculator(){
    display.value = eval(display.value);
}
