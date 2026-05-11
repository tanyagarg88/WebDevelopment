// Simple Arithmetic Operations Utility
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not permitted');
  return a / b;
}

console.log('2 + 2 =', add(2, 2));
console.log('10 * 5 =', multiply(10, 5));


<!-- Updated: 2026-05-11T13:52:30+05:30 [Foundation Commit #227] -->
