(function () {
    "use strict";

    class Ship {
        constructor(position) {
            this.diameter = 20;
            this.radius = this.diameter / 2;

            this.x = position.x;
            this.y = position.y;

            this.dx = 0;
            this.dy = 0;
        }

        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
    }

    window.Ship = Ship;
}());
