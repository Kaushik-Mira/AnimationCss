function Sequence(userInput) {
  let letters = [
    "q",
    "w",
    "r",
    "y",
    "u",
    "p",
    "c",
    "s",
    "f",
    "o",
    "g",
    "h",
    "j",
    "k",
    "l",
    "d",
    "e",
    "z",
    "v",
    "x",
    "b",
    "i",
    "n",
    "t",
    "m",
    "a",
  ]; 

  // Split the user input into an array of letters
  let inputLetters = userInput.split("");
  console.log(inputLetters);

  // Find the index of each input letter in the 'letters' array
  let indexedLetters = inputLetters.map((letter) => {
    return { letter: letter, index: letters.indexOf(letter) };
  });
  console.log(indexedLetters);

  // Sort the input letters based on their index in the 'letters' array
  indexedLetters.sort((a, b) => a.index - b.index);

  // Extract the letters in the sorted order
  let sortedLetters = indexedLetters.map((item) => item.letter);
  console.log(sortedLetters);

  // Print the result
  console.log(sortedLetters.join(" "));
}

// Example usage
Sequence("ativedoc");

//? Another example
const fruits = [0, 1, 2, 3, 4, 5];

fruits.sort((a, b) => {
  console.log(a, b);
});
