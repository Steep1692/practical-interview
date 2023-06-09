
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

const obj = new Obj()

obj // how would look like?

/**
{
  // what's here
}
**/








// ––––– TASK 3
const a = { foo: ‘bar’ }
const b = { foo: ‘bar’ }

a === b // ? and why








// ––––– TASK 4
const obj = {
  props: "I'm a props",
  method: function(){
    console.log( this.props )
  }
}

obj.method() // I'm a props

const { method } = obj;
method() // ? and why and solutions





// ––––– TASK 5
/** Differences  **/
// #1
alert(foo());
const foo = function() { return 5; }
// #2
alert(foo());
function foo() { return 5; }




// ––––– TASK 6
// Explain the code
React.createElement(
  React.Fragment,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)


// ––––– TASK 7
// Explain the code, and differences between {takeEvery} and {takeLatest}
takeEvery(dialogActionsConstants.PULL_BY_ID, pullDialogById)
takeLatest(dialogActionsConstants.PULL_BY_ID, pullDialogById)

// ––––– TASK 8
// Difference?
export default A;
export const B;


// ––––– TASK 9
// Explain the code
const noteElements = elContainer.querySelectorAll(
`a.${CONTENT_CLASSES.FOOT_NOTE},a.${CONTENT_CLASSES.CHAPTER_END_NOTE},a.${CONTENT_CLASSES.BOOK_END_NOTE}`
);

// ––––– TASK 10
// Explain the reg exp
new RegExp(/{(audio|image|video):(.+?)}/gm)
