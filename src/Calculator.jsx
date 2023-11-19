import React from "react";

function Calculator() {
  // completed simple calculator
  const [inpOne, setInpOne] = React.useState(0);
  const [inpTwo, setInpTwo] = React.useState(0);
  const [result, setResult] = React.useState(0);

  function handleCalculation(operator) {
    switch (operator) {
      case "+":
        setResult(inpOne + inpTwo);
        break;
      case "-":
        setResult(inpOne - inpTwo);
        break;
      case "*":
        setResult(inpOne * inpTwo);
        break;
      case "/":
        setResult(inpOne / inpTwo);
        break;
      default:
        setResult(0);
        break;
    }
  }
  return (
    <div>
      {/* Number(e.target.value) convert the value into a possible number form */}
      <input
        type="number"
        onChange={(e) => setInpOne(Number(e.target.value))}
      />
      <input
        type="number"
        onChange={(e) => setInpTwo(Number(e.target.value))}
      />
      <div>
        <button onClick={() => handleCalculation("+")}>Add</button>
        <button onClick={() => handleCalculation("-")}>Subtract</button>
        <button onClick={() => handleCalculation("*")}>Multiply</button>
        <button onClick={() => handleCalculation("/")}>Division</button>
      </div>
      {/* if result is greater than or zero or less than zero then show  */}
      {result !== 0 && <p>Result: {result}</p>}
    </div>
  );
}

export default Calculator;
