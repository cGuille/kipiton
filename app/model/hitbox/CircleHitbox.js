(function () {
    "use strict";

    class CircleHitbox {
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        }

        type() {
            return 'circle';
        }

        overlapsWith(hitbox) {
            throw new UnsupportedHitboxType(hitbox.type());
        }
    }

    window.CircleHitbox = CircleHitbox;
}());
