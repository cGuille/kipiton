(function () {
    "use strict";

    class Countdown extends EventEmitter {
        constructor(milliseconds) {
            super();
            this.value = milliseconds;
        }

        start() {
            this.lastTime = Date.now();
        }

        update() {
            const now = Date.now();
            const delta = now - this.lastTime;
            this.value -= delta;
            this.lastTime = now;

            if (this.value < 0) {
                this.value = 0;
                this.emit('timeout');
            }
        }

        addTime(milliseconds) {
            this.value += milliseconds;
        }
    }

    window.Countdown = Countdown;
}());
