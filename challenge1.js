// Function to swap the case of each character in a string
function swapCase(str) {
    // Initialize an empty string for the result
    let result = '';
    // Loop through each character in the string
    for(let i = 0; i < str.length; i++) {
        // If the character is uppercase, convert it to lowercase
        // If the character is lowercase, convert it to uppercase
        result += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    // Return the result string
    return result;
  }
  console.log(swapCase('The Quick Brown Fox'));  // Output: 'tHE qUICK bROWN fOX'
  