# CODE-CHALLENGE -2

## 1.Text Inverter 
In this first program,I have created a javascript file that takes in an input ,converts it into a string and inverts the cases of individual letters.

### EXPLLANATION.
First, the user is prompted to input  what their favorite book is .
Then we create a variable called finalresult and assign an empty string to it.
I then created a for loop that begins iteration at zero upto the length of the user input while increasing.
Then ,I created a variable called character and assigned the index of input that is being itterated through at the moment.
If the character is set to lowercase,it is returned as uppercase and the result is appended to the empty string therefore the order of the input is maintained even though we change the cases. 
If the charachter is set to uppercase it is equally converted to lowercase and the value added to the string.
The else represents a value such as a number that can neither be a uppercase or lowercase which iss just appended the way it is.
The console then logs the finalresult .


## 2.NUMBER GENERATOR
Here I created a function that takes in two numbers as arguements and generators an array containing the numbers between them.

### EXPLANATION.
First,I created a function that is called generate that takes in two numbers as inputs
Then I created an empty array assigning it the name numberz which is where the  numbers will be logged.
Next,you'll notice an if statement.Here we check if the first number is greater than the second,if the condition is met,iteration shall begin from the smaller value which will be the second arguement.The result is then pushed to the numbers array.
If the second number is greater than the first,iteration shall begin from the smaller value and the result pushed to the empty numberz array.
the final numberz array is then logged into the console.



## 3.PRIME NUMBERS.
In this function ,I have created a fucntion that takes in an array as input or a parameter and brings back an array containing the numbers considered as prime numbers.

### EXPLANATION
In the function prime,a parameter called num is taken.
Within the function ,I created an if statement that first checks if the input if either one or a value below one and returns false if the is such a value.

Then,I created a for loop that has an iteration that begins checking from two all the way to half the number of thvalue in question.In it I create an if statement that checks if all through the iteration the remainder is ever zero,it returns false meaning the number is not a prime number.if it does not satisfy that condition it returns true meaning it is a prime number.

Next,I created a function called filterNumberz which allows a paramater I have named numbers,which return  a filtered version of numbers by using an arrow function with a parameter num that calls the function prime passing our arguement num as its arguement.

Then I created a constant called primeNumbers and assigned to the filternumberz function and passes the manamba array as a paramater.
Then we log the primeNumbers into the console which gives us the new array of filtered numbers.


## AUTHOR
Bill Kimtai.

## LICENSE
APPROVED?!