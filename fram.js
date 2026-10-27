function drawStairs(n) {
  let spaces = " ";
  let result = "";
  for (i = 0; i < n; i++) {
    result += spaces.repeat(i) + "I\n";
  };
  return result.slice(0, result.length -1);
};

console.log(drawStairs(5));


/*
find last instance of I
dont add a new line after last instance
*/
