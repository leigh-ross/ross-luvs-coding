function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
      return result;
    case "-":
      result = value.a - value.b;
      return result;
    case "/":
      result = value.a / value.b;
      return result;
    case "*":
      result = value.a * value.b;
      return result;
    case "%":
      result = value.a % value.b;
      return result;
    case "^":
      result = Math.pow(value.a, value.b);
      return result;
  }
  return result;
}

console.log(evalObject({ a: 5, b: 1, operation: "/" }));
