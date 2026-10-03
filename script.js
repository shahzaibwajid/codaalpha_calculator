let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        let result = eval(expression);

        display.value = result;

    } catch (error) {
        console.log(error);
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (key >= "0" && key <= "9") {
        appendValue(key);
    }

    if (["+", "-", "*", "/", "."].includes(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        calculate();
    }
    if (key === "Backspace") {
    deleteLast();
}

    if (key === "Escape") {
    clearDisplay();
}

});
