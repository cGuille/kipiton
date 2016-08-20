(function () {
    "use strict";

    class EventEmitter {
        constructor() {
            this.listeners = new Map();
        }

        emit(eventName, ...eventData) {
            if (!this.listeners.has(eventName)) {
                return 0;
            }

            let sent = 0;

            this.listeners.get(eventName).forEach(function (listener) {
                window.setTimeout(listener.handler.bind(listener.context, ...eventData), 0);
                ++sent;
            });

            return sent;
        }

        on(eventName, handler, handlerContext) {
            if (!this.listeners.has(eventName)) {
                this.listeners.set(eventName, []);
            }

            this.listeners.get(eventName).push({ handler: handler, context: handlerContext });
        }
    }

    window.EventEmitter = EventEmitter;
}());
