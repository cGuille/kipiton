(function () {
    "use strict";

    class Ship {
        constructor(position) {
            this.radius = 20;

            this.x = position.x;
            this.y = position.y;

            this.dx = 0;
            this.dy = 0;

            this.inDangerZone = false;
        }

        move() {
            this.x += this.dx;
            this.y += this.dy;
        }

        get alert() {
            return this.inDangerZone;
        }
    }

    window.Ship = Ship;
}());
