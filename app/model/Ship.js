(function () {
    "use strict";

    class Ship {
        constructor(position) {
            this.radius = 30;

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
