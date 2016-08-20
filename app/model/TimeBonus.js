(function () {
    "use strict";

    class TimeBonus {
        constructor(position) {
            this.x = position.x;
            this.y = position.y;
            this.radius = 10;
        }
    }

    window.TimeBonus = TimeBonus;
}());
