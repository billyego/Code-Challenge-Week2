//First ,I created an array with various values.
const manamba=[1,2,3,4,5,6,7,8,9]
//I then created a function called prime where first we check if the number is one or below one..if so it returns false becuase theres no way its a prime number.
function prime(num) {
    if(num<=1)return false;
    //Then I initated a for loop that begins its checking at two..all the way to half the value of i in increment.
    for (let i=2;i<=num/2;i++){
     //If the reminder is zero it means that that number is divisible with another value thereforenot prime.
        if (num%i===0){
            return false;
        }//If throughout the loop the remainder is never zero that nuber is considered prime.
    }
    return true;}
    
//The following function then filters the values depending on whether they returned true or false.
function filterNumberz(numbers){
    return numbers.filter(num=>prime(num));}
//primenumbers is a constant that calls the function filterNumberz apssing the manamba array as an arguement.
function returnee(){
const primeNumbers=filterNumberz(manamba);
console.log(primeNumbers);//Then logged into the console.
return primeNumbers;
}
returnee()