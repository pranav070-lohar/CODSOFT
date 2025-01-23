document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "0";
    let currentOperator = "";
    let prevInput = "";
  
    function updateDisplay() {
      display.textContent = currentInput;
    }
  
    function handleDigitClick(digit) {
      if (currentInput === "0") {
        currentInput = digit;
      } else {
        currentInput += digit;
      }
      updateDisplay();
    }
  
    function handleOperatorClick(operator) {
      if (currentInput !== "") {
        prevInput = currentInput;
        currentInput = "0";
        currentOperator = operator;
      }
    }
  
    function handleEqualsClick() {
      const prev = parseFloat(prevInput);
      const current = parseFloat(currentInput);
  
      switch (currentOperator) {
        case "+":
          currentInput = prev + current;
          break;
        case "-":
          currentInput = prev - current;
          break;
        case "*":
          currentInput = prev * current;
          break;
        case "/":
          currentInput = current === 0 ? "Error" : prev / current;
          break;
        default:
          return;
      }
  
      currentOperator = "";
      prevInput = "";
      updateDisplay();
    }
  
    function handleSqrtClick() {
      const current = parseFloat(currentInput);
      if (current >= 0) {
        currentInput = Math.sqrt(current).toString();
      } else {
        currentInput = "Error";
      }
      updateDisplay();
    }
  
    function handlePercentClick() {
      const current = parseFloat(currentInput);
      currentInput = (current / 100).toString();
      updateDisplay();
    }
  
    function clear() {
      currentInput = "0";
      currentOperator = "";
      prevInput = "";
      updateDisplay();
    }
  
    function backspace() {
      currentInput = currentInput.slice(0, -1) || "0";
      updateDisplay();
    }
  
    // Add event listeners to digit buttons
    for (let i = 0; i <= 9; i++) {
      document.getElementById(i.toString()).addEventListener("click", () => {
        handleDigitClick(i.toString());
      });
    }
  
    // Add event listeners to operator buttons
    document.getElementById("add").addEventListener("click", () => handleOperatorClick("+"));
    document.getElementById("subtract").addEventListener("click", () => handleOperatorClick("-"));
    document.getElementById("multiply").addEventListener("click", () => handleOperatorClick("*"));
    document.getElementById("divide").addEventListener("click", () => handleOperatorClick("/"));
  
    // Add event listeners to other buttons
    document.getElementById("equals").addEventListener("click", handleEqualsClick);
    document.getElementById("clear").addEventListener("click", clear);
    document.getElementById("backspace").addEventListener("click", backspace);
    document.getElementById("decimal").addEventListener("click", () => {
      if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
      }
    });
    document.getElementById("sqrt").addEventListener("click", handleSqrtClick);
    document.getElementById("percent").addEventListener("click", handlePercentClick);
  
    updateDisplay();
  });
  