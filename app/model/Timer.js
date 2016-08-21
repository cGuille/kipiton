(function () {
    "use strict";

    class Timer {
        constructor(startTime) {
            this.startTime = startTime;
            this.currentTime = startTime;
        }

        get elapsedTime() {
            return this.currentTime - this.startTime;
        }
    }

    window.Timer = Timer;
}());
