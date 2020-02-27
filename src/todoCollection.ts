import {TodoItem} from './todoItem';

// ItemCount - type alias
type ItemCounts = { // Shape object
    total: number;
    incomplete: number;
}

export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>(); // number and TodoItem are generic type arguments
    constructor(public userName: string, todoItems: TodoItem[] = []){
        todoItems.forEach((item: TodoItem) => this.itemMap.set(item.id, item));
    }

    addTodo(task: string): number {
        while(this.getTodoById(this.nextId)){
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }
    getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);
    }
    getTodoItems(includeComplete: boolean = false): TodoItem[] {
        return [...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        })
    }
    getItemCounts(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        }
    }
}