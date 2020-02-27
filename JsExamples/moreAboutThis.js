'use strict'
function writeMessage(message) {
    console.log(`(in global) ${(this || {}).greeting || 'Nothing'}. ${message}`); // is not working in 'use strict' mode
    console.log(` (just variable) ${greetingConst}. ${message}`);
}

const greetingConst = 'Const Hello';
try {
    greeting = 'Hello'; // is not working in 'use strict' mode
} catch {
    console.log('Maybe in strict mode. Cannot assign variable to global');
}

writeMessage('It is sunny today');
writeMessage.call(global, 'It is sunny today');
writeMessage.call({...global, ...{greeting: 'Hi!!!!'}}, 'It is sunny today'); //Rewrite global property
