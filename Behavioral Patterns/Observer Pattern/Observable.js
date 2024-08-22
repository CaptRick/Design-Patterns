class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
        console.log(`${func.name} subscribed!`);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter((observer) => observer !== func);
        console.log(`${func.name} unsubscribed!`);
        
    }

    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

function logger1(data){
    console.log(`logger1: ${data}`)
}

function logger2(data){
    console.log(`logger2: ${data}`)
}

const observable = new Observable();

observable.subscribe(logger1); // logger1 subscribed!
observable.subscribe(logger2); // logger2 subscribed!

observable.notify("Notified"); 
// logger1: Notified 
// logger2: Notified

observable.unsubscribe(logger1); // logger1 unsubscribed!

observable.notify("Notified"); // logger2: Notified
