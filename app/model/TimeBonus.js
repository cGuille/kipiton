(function () {
    "use strict";

    class TimeBonus {
        constructor(position) {
            this.x = position.x;
            this.y = position.y;
            this.diameter = 10;
            this.radius = this.diameter / 2;
        }
    }

    window.TimeBonus = TimeBonus;
}());
