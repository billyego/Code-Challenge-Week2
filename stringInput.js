const prompt = require("prompt-sync")({ sigint: true });
//I have created a fucntion that prompts theuser to input their favorite book.
function getCharacter() {
    const input = prompt('What is your favourite book?');
console.log(typeof input)
    
//I then assign finalresult an empty string.
    let finalResult = '';
    //I then made a loop that would start iterating from zero to the length of the value input in increament. 
    for (let i = 0; i < input.length; i++) {
        //I then assigned the variable char with the index ,which is varying, of  the input.
        let character = input[i];
        //Here,if the charachter is lowercase,it is converted to uppercase.
        if (character === character.toLowerCase()) {
            finalResult += character.toUpperCase();
            //Here if the charachter in question is in uppercase it is converted to lowercase.
        } else if (character === character.toUpperCase()) {
            finalResult += character.toLowerCase();
        } else {
            finalResult += character;
        }
    }//NOTE!After every loop ,the result is logged into the final result theefore the order of charachters is maintained.
    //I then logged the value of the final result into the console.
    console.log(finalResult);
}
//Finally, I call the function so that we can see the results in the console.
getCharacter();