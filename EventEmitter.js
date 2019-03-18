import { Subject } from '/Core/patt/Subject.js';

let INSTANCE = null;

export class EventEmitter {
    constructor() {
        if (INSTANCE) return INSTANCE;
        INSTANCE = this;
    }

    on(eventName, callback) {
        new Subject(eventName).addObserver(callback);
    }

    emit(eventName, context) {
        new Subject(eventName).status = context;
    }
}