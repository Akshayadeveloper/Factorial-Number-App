//1. HTML:
//    - Input field for the user to enter a number.
//    - Button to trigger the factorial calculation.
//    - Output area to display the result.
//2. CSS:**
//    - Basic styling for layout and appearance.
//3. JavaScript:**
//    - Recursive `factorial` function to calculate the factorial.
//    - `calculateFactorial` function to handle user input, call the `factorial` function, and display the result.

// Instructions To use the app:

//1. Save the code as an HTML file (e.g., `factorial.html`).
// 2. Open the file in a web browser.
// 3. Enter a number in the input field.
//4. Click the "Calculate Factorial" button.
// 5. The factorial of the entered number will be displayed in the output area.

function calculateFactorial() {
  const num = parseInt(document.getElementById("num").value);
  const outputDiv = document.querySelector(".output");
  outputDiv.textContent = ""; // Clear previous output

  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  const result = factorial(num);
  outputDiv.textContent = `The factorial of ${num} is: ${result}`;
}
