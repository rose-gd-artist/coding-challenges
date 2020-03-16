//Week 6:


//3. Write a function that takes an array of numbers as argument and lists in another array all numbers bigger than 10; if there are no numbers bigger than ten just console.log("no numbers bigger than 10");


var array = [17, 35, 49, 99, 37];

function numberArray(array){
    var empty = [];
    for(var i = 0; 1 < array.length; i++){
        if (array[i] > 10 === 0){
            empty.push(array[i])
        } 
    
    } console.log(empty)
    if(empty.length <= 10){
        console.log("there are no numbers bigger than 10")
    }
}







//4. Write a function that takes a string as an argument and returns (console.logs) all the vowels in this string
//
//var word;
//
//function oldMcDonald(word){
//    var vowels = [a, e, i, o, u];
//    word = "";
//    word.split();
//    
//    
//}
//oldMcDonald("automatically")








//5. Write a function that takes a string sentence as an argument and lists all the words that are longer than 5 characters in this sentence. IF there is no word longer than five characters console.log('very short words")









//6. Write a function that lists all the numbers from 0 to 100; If a number is divisible by 3 console.log("Fizz"); if a number is divisible by 5, console.log("Buzz"); if a number is divisible by both 3 and 5 console.log("FizzBuzz")--most common coding job interview job questions or and and