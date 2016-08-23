(function () {
    "use strict";

    class RectHitbox {
        constructor(x, y, width, height) {
            this.x = x;
            this.y = y;

            this.width = width;
            this.height = height;
        }

        type() {
            return 'rect';
        }

        overlapsWith(hitbox) {
            switch (hitbox.type()) {
                case 'circle':
                    return overlapsWithCircleHitbox.call(this, hitbox);
                    break;
                case 'rect':
                    return overlapsWithRectHitbox.call(this, hitbox);
                    break;
                default:
                    throw new UnsupportedHitboxType(hitbox.type());
                    break;
            }
        }
    }

    function overlapsWithCircleHitbox(circleHitbox) {
        const rectTop = this.y;
        const rectBottom = this.y + this.height;
        const rectLeft = this.x;
        const rectRight = this.x + this.width;

        const circleTop = circleHitbox.y - circleHitbox.radius;
        const circleBottom = circleHitbox.y + circleHitbox.radius;
        const circleLeft = circleHitbox.x - circleHitbox.radius;
        const circleRight = circleHitbox.x + circleHitbox.radius;

        return (
            circleTop < rectBottom &&
            circleBottom > rectTop &&
            circleLeft < rectRight &&
            circleRight > rectLeft
        );
    }

    window.RectHitbox = RectHitbox;
}());
