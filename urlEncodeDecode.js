// read input into some varible
// check if encode or decode

// usage: node urlEncodeDecode.js decode <url>
var method = 'enc';

var in1 = process.argv[2]; //method
var in2 = process.argv[3]; // variable
// encode

var func1 = function (val) {
	console.log(encodeURIComponent(val))
}	
var func2 = function (val) {
	// console.log(decodeURIComponent(val))
	console.dir(decodeURIComponent(val), {depth:null, colors: true})
	// var a = JSON.stringify(decodeURIComponent(val), undefined, 4)
	// console.log	(a)
}

var funcMapper = {'enc' : func1, 'dec': func2}


// [] brackets evaluates the parameter inside it
funcMapper[process.argv[2]](process.argv[3])
// console.log(funcMapper[in1])

