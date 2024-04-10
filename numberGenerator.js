//First ,I created a function called generate thaat takes in two numbers as parameters.
function generate(num1,num2){
//I then assigned a variable numberz an empty array so that the values can be stored in it.
    let numberz=[];
//The if statement then checks if the condition is true.  
    if(num1>num2){
        //if the first number is greater than the second,iteration shall begin one number after the smaller value in increments.
    for(let i=Math.floor(num2)+1;i<Math.floor(num1);i++){
    
    //Then the numbers are pushed into the numbers array then logged into the console.   
    numberz.push(i);}

    }else if (num2>num1){
        //If the number second arguement is greater,iteration begins from the smaller value.
        //The math.floor rounds of the value input to the closest whole number.
        for(let i=Math.floor(num1)+1;i<Math.floor(num2);i++){
    
            //Then the numbers are pushed into the numbers array then logged into the console.   
            numberz.push(i)}
    }
    console.log(numberz)
}


generate(4,9);