
//Write a function called printPositives that takes an array and uses its forEach method to print only the positive numbers.
var numbers = [1, 3.14, -100, -88, 99, 4];
var printPositives = numbers.forEach(function(numbers) {
    if (numbers>0){
	console.log(numbers);
    }
})
console.log(printPositives)

/*
//Similar to the previous exercise, write a function called getPositives that takes an array and uses its filter method to 
//return a new array with only the positive numbers
var arr = [4, -5, 18, -19]
var getPositives = arr.filter(function(number) {
	return number > 0 ;
});
console.log(getPositives)
*/
