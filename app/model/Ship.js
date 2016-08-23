(function () {
    "use strict";

    class Ship {
        constructor(position) {
            this.x = position.x;
            this.y = position.y;
            this.radius = 20;
            this.hitbox = new CircleHitbox(this.x, this.y, this.radius);

            this.dx = 0;
            this.dy = 0;

            this.inDangerZone = false;
        }

        move() {
            this.x += this.dx;
            this.y += this.dy;

            this.hitbox.x = this.x;
            this.hitbox.y = this.y;
        }

        get alert() {
            return this.inDangerZone;
        }
    }

    window.Ship = Ship;
}());
