//coding challenge 2-27-2020

//1. Write a function that takes two arguments,
//   divides the first from the second. IF the
//   sum of the two arguments is higher than 0
//   print "this is a positive number"; if it
//   is negative print "this is negative".
//   If it is zero print "this is zero"

var a;
var b;
var c;

function divideFunction(a, b) {
	var c = b / a;
	if (c == 0) {
		console.log("This is zero")
	} else if(c > 0) {
        console.log("This is a positive number")
    } else {
        console.log("This is a negative number")
    }
}


//got it to work finally



//////////////////////////////////////////////



//2. Write a function that takes an array
//   as parameter and returns only the
//   odd numbers in a separate array;
//
//var numList1 = [1,2,3,4,5,6,7];
//var numList2;
//var oddNumbers;
//
//function oddNums(numList1){
//    var oddNumbers = i % 2 !== 0;
//    var numList2 = numList1[i] - oddNumbers[i];
//    for(i = 0; i < numList1.length; i++){
//        if (i % 2 !== 0){
//            console.log(numList2.push(i))
//        }
//    }
//}
//oddNums(); this did not work

//var numList1 = [1,2,3,4,5,6,7];
//var numList2;
//var oddNumbers;
//
//function oddNums(numList1){
//    for(i = 0; i < numList1.length; i++){
//        var oddNumbers = i % 2 !== 0;
//        var numList2 = numList1[i] - oddNumbers[i];
//        if (i % 2 !== 0){
//            console.log(numList2.push(i))
//        }
//    }
//}
//oddNums(); this did not work


