(function () {
    "use strict";

    class DangerZone {
        constructor(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.hitbox = new RectHitbox(x, y, width, height);

            this.active = false;
        }

        activate() {
            this.active = true;
        }

        deactivate() {
            this.active = false;
        }

        isActive() {
            return this.active;
        }
    }

    window.DangerZone = DangerZone;
}());
