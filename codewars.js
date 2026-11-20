function stringExpansion(s) {
  let result = "";
  let multiplier = 1;
  for (character of s) {
    if (/\d/.test(character)) {
      multiplier = Number(character);
    } else {
      result += character.repeat(multiplier);
    }
  }
  return result;
}

console.log(stringExpansion("3abc")); //"aaabbbccc"
console.log(stringExpansion("3D2a5d2f")); //"DDDaadddddff"
console.log(stringExpansion("0d0a0v0t0y")); //""
console.log(stringExpansion("3d332f2a")); //"dddffaa"
console.log(stringExpansion("abcde")); //"abcde"
console.log(stringExpansion("a2bcde")); //"abbccddee"

/*
The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
Empty strings should return an empty string.
*/
