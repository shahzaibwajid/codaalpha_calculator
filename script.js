let display = document.getElementById("display");
let history = [];
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

        history.push(expression + " = " + result);
        updateHistory();
    } catch (error) {
        display.value = "Error";
    }
}
function updateHistory() {
    let historyList = document.getElementById("historyList");

    historyList.innerHTML = "";

    history.forEach(function(item) {
        let historyItem = document.createElement("p");
        historyItem.textContent = item;
        historyList.appendChild(historyItem);
    });
}
