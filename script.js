function display(){
    var display = document.getElementById("number");   // get the display element
    display.innerHTML = this.value;                      // set the display element to the value of the current number
}

function numberClick(number) {
    var insertNumber = document.getElementById('number').innerHTML;
    if (document.getElementById('number').innerHTML != 0){
        document.getElementById('number').innerHTML = insertNumber + number;
    }
    else {
        document.getElementById('number').innerHTML = number;
    }
    
}

function clean(){
    document.getElementById('number').innerHTML = "0";
}

function backspace(){
    let numberDisplayed = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = numberDisplayed.substring(0, numberDisplayed.length - 1);
}

function equal() {
    let numberDisplayed = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = eval(numberDisplayed);

}