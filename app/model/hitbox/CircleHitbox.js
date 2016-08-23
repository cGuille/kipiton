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
            switch (hitbox.type()) {
                case 'circle':
                    return overlapsWithCircleHitbox.call(this, hitbox);
                    break;
                default:
                    throw new UnsupportedHitboxType(hitbox.type());
                    break;
            }
        }
    }

    function overlapsWithCircleHitbox(other) {
        return distance(this, other) <= this.radius + other.radius;
    }

    function distance(pos1, pos2) {
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    window.CircleHitbox = CircleHitbox;
}());
