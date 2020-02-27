const myObject = {
    greeting: 'Hi, there',
    getWriter() {
        // console.log(this.greeting);
        return (message) => {
            console.log(`${this.greeting}, ${message}`);
        }
    },
    writeDetails: () => {
        console.log(`${this.greeting}. Some message (trying to read this as global object)`)
        console.log(`${greeting}. Some message (just access scope of call point)`)
    }
}

greeting = 'Hello';

myObject.getWriter()('Have a nice day');
let writer = myObject.getWriter(); // When we call getWriter(), we set scope for arrow functions
writer('Have a nice day from writer!');

let standAlone = myObject.getWriter; // Set functions as variable - lose myObject this
let standAloneWriter = standAlone();
standAloneWriter('Have a nice day from standalong writer!');


// myObject.writeDetails();
