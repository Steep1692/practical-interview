
// ––––– TASK 1
const obj = {}

obj["prop" + 2] = 22

Object.keys(obj) // ?






// ––––– TASK 2
class Obj {
	constructor(prop = 3){
		this.prop = prop
	}

	announce(…args) {
		alert(‘Announcing: ‘, args)
	}
	
	static announceProp() {
		announce(this.prop)
	}
}






// ––––– TASK 3
const a = { foo: ‘bar’ }
const b = { foo: ‘bar’ }

a === b // ?







// ––––– TASK 4
// Explain the code
const className1 = 'test1'
const className2 = 'test2'
const $specificLinks = $container.querySelectorAll(`a.${className1},a.${className2}`);






// ––––– TASK 5
const obj = {
  text: "Hello",
  method: function(){
    console.log( this.text )
  }
}

// works OK, prints "Hello" to the console
obj.method()

// doesn't work, prints "undefined" to the console.
// Why and solutions?
const { method } = obj;
method()


// ––––– TASK 6
// 1. Write a function that reverses a string.
// 2. Write an asynchronous function that simulates fetching data from an API.
