// Function to generate an array of numbers between two given numbers (inclusive)
function generateArray(start, end) {
    // Initialize an empty array
    let array = [];
    // Loop from the start number to the end number
    for(let i = start; i <= end; i++) {
        // Add each number to the array
        array.push(i);
    }
    // Return the generated array
    return array;
}

// Test the generateArray function with the numbers 4 and 7
console.log(generateArray(4, 7));  // Output: [4, 5, 6, 7]
// Test the generateArray function with the numbers -4 and 7
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
