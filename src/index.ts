import {TodoItem} from './todoItem';
import {TodoCollection} from './todoCollection';
import * as inquerer from 'inquirer'; 

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new TodoCollection("Adam", todos);

// console.clear();
function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo list (${collection.getItemCounts().incomplete}) items to do`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
}

enum Commands {
    Quit = 'Quit',
    Procees = 'Proceed'
}


// collection.removeComplete();
// console.log(`${collection.userName}'s Todo list ` + 
// `(${collection.getItemCounts().incomplete}) items to do`);
// collection.getTodoItems(true).forEach(item => item.printDetails());


function promptUser(): void {
    console.clear();
    displayTodoList();
    inquerer.prompt({
        type: 'list',
        name: 'command',
        message: 'Choose command',
        choices: Object.values(Commands),
    }).then(answer => {
        if (!Object.values(Commands).includes(answer.command)) {
            promptUser();
        }
    })
}

promptUser()