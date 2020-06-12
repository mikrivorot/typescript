abstract class Abs {
    abstract getInfo(): string;
}

class Person {
    constructor(public id: string){};
}

class Employee extends Person {
    constructor(public id: string, public pos: string) {
        super(id);
    }
}

class Supplier extends Person {
    constructor(public id: string, public abteil: string) {
        super(id);
    }
}

class Customer extends Person {
    constructor(public id: string, public customId: string) {
        super(id);
    }
}

class DerivedFromAbs extends Abs {
    getInfo() {
        return 'info';
    }
}

const emp = new Employee("1", "developer");
const pers = new Person("2");
const sup = new Supplier("2", "33");
const cust = new Customer("2", "33");

const abs = new DerivedFromAbs();

const list = [pers, emp];
const subList: Person[] = [emp, sup];

subList.push(cust);

[abs, cust, sup].forEach(x => {
    if (x instanceof Person && x instanceof Customer) {
        return x.customId;
    } else if (x instanceof Abs) {
        return x.getInfo();
    } else {
        return x.abteil;
    }
})

interface X {
    id: string;
};

interface X {
    getId(): string
}