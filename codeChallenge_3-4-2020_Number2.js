// 2. Write a function that takes an array of numbers as an argument. Then it lists ONLY the numbers that are divisible by 3  If there are not such numbers console.log(“Sorry, no 3-divisible numbers”). (Think of push() method)

//var array = [17, 35, 49, 99, 37];
//
//function myArray(array){
//    for(i = 0; i < array.length; i++){
//       if (i / 3){
//           console.log(i + "this is divisible by 3")
//        } 
//    }
//}
//myArray();

var array = [17, 35, 49, 99, 37];

function numberArray(arg){
    var empty = [];
    for(var i = 0; 1 < arg.length; i++){
        if (arg[i] % 3 === 0){
            empty.push(array[i])
        } 
    
    }
    if(empty.length === 0){
        console.log("there are no numbers divisible by 3")
    } else {
        console.log(empty)
    }
}
numberArray(array)
