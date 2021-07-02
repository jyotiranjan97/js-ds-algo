// Write a function which returns number of character in a string
// ==============================================================

// 1. Start with Simple Examples
"aaaa"; // {a: 4} or {a: 4, b: 0, c: 0, ...}
"char"; // {a: 1, c: 1, h: 1, r: 1}

// 2. Progress with more Complex Examples
"Hello World!"; // Is special characters are considered
"My Phone number is 12345"; // Is numbers are considered
"Hello hi"; // what about upper and lowercase

// 3. Explore Example with Empty Input
"";
" "; // is Empty or spaces are considered

// 4. Explore with Invalid Example
456; // what if one gives Number as input

const charCount = (input) => {
  // Initiate an Empty Object where results will be stored
  const output = {};

  // Iterate through the String
  for (let i = 0; i < input.length; i++) {
    // Get the character
    let char = input[i];

    // Convert to lowercase to avoid duplicacy of characters
    // If character exists in output or not
    if (output.hasOwnProperty(char.toLowerCase())) {
      output[char.toLowerCase()] += 1;
    } else {
      output[char.toLowerCase()] = 1;
    }
  }
  return output;
};

console.log(charCount("Jyotiranjan"));
