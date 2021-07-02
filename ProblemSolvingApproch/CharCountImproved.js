const charCount = (input) => {
  const output = {};
  for (let char of input) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      output[char] = ++output[char] || 1; // Add 1 if char exists or add the char and initialize to 1
    }
  }
  return output;
};

console.log(charCount("Jyotiranjan"));
// The above Solution is checking Regular Expression which is slow
// and it's not checking for empty string Input

// Another Approach

const charCountImproved = (input) => {
  // Handle for Empty Inputs
  if (input.trim() === "") {
    return "Input can't be Empty!";
  }

  const output = {};
  const str = input.toLowerCase();
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      output[char] = ++output[char] || 1;
    }
  }
  return output;
};

const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if ((code > 47 && code <= 58) || (code > 96 && code < 123)) {
    return true;
  }
  return false;
};

console.log(charCountImproved("My Name is Jyotiranjan!!!"));
// The Ebove example is efficient that the previous one

// ! Note - There is no most efficient solution, each solution can be improved at some point of time
