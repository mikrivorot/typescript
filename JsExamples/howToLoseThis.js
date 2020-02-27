// Assign object function to variable -> change `this`
// 'use strict';
const myObject = {
    greeting: 'Object greeting',
    callAndGetGreeting(){
        console.log(this.greeting);
        return this.greeting;
    }
}

const objectGreeting = myObject.callAndGetGreeting();
const freeFunction = myObject.callAndGetGreeting;
greeting = 'Free greeting';
freeFunction();