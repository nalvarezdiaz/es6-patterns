
class Observable {

    constructor() {
        this.handlers = [];
    }

    subscribe(eventName, handler) {
        this.handlers[eventName] = this.handlers[eventName] || [];
        this.handlers[eventName].push(handler);
    }

    publish(eventName, eventData) {
        const handlers = this.handlers[eventName];
        handlers.forEach( handler =>{
            handler.call({}, eventData);
        });
    }

}
