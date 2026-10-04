function drawStairs(n) {
  let spaces = n - 1;
  let result = "";
  for (let i = 0; i < n; i++) {
    result += "I\n";
  }
  return result
}

console.log(drawStairs(3))