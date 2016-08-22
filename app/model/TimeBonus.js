(function () {
    "use strict";

    class TimeBonus {
        constructor(position, time) {
            this.x = position.x;
            this.y = position.y;
            this.radius = 10;
            this.time = time;
        }
    }

    window.TimeBonus = TimeBonus;
}());
