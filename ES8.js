// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log ('includes' , dragons.includes('John')); // false
const john = dragons.filter ( check => check.includes('John'));
console.log('filter', john);


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
if (dragons.includes('John')) {
	const x = dragons.includes('John');
	console.log (x); 
}
else if ( dragons.filter(check => check.includes('John')))
	{
		let john = dragons.filter( check => check.includes('John'));
		console.log(john);
}
else {
	console.log('dragons has not John')
}
// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const calculate = () => {
	const x = prompt ('enter a number');
	console.log(100**x);
}
calculate();
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

