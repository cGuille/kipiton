(function () {
    "use strict";

    const RADIUS = 10;

    class TimeBonus {
        constructor(position, time) {
            this.time = time;

            this.x = position.x;
            this.y = position.y;
            this.radius = RADIUS;
            this.hitbox = new CircleHitbox(this.x, this.y, this.radius);
        }
    }

    TimeBonus.RADIUS = RADIUS;

    window.TimeBonus = TimeBonus;
}());
