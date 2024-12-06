// Select all buttons
const btnsEle = document.querySelectorAll("button");

// Select the input element
const inputEle = document.getElementById("result");

// Attach event listeners to all buttons
for (let i = 0; i < btnsEle.length; i++) {
    btnsEle[i].addEventListener("click", () => {
        const btnValue = btnsEle[i].textContent;
        if (btnValue === "C") {
            clearResult();
        } else if (btnValue === "=") {
            calculateResult();
        } else {
            appendValue(btnValue);
        }
    });
}

// Function to clear the result
function clearResult() {
    inputEle.value = "";
}

// Function to calculate the result
function calculateResult() {
    try {
        // Evaluate the expression safely
        inputEle.value = new Function('return ' + inputEle.value)();
    } catch (e) {
        inputEle.value = "Error";
    }
}

// Function to append value to the input
function appendValue(btnValue) {
    inputEle.value += btnValue;
}
