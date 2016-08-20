(function () {
    "use strict";

    class Board {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.dangerZoneThickness = 20;

            this.dangerTop = false;
            this.dangerRight = false;
            this.dangerBottom = false;
            this.dangerLeft = false;
        }

        contains(ship) {
            const shipTop = ship.y - ship.radius;
            const shipBottom = ship.y + ship.radius;
            const shipLeft = ship.x - ship.radius;
            const shipRight = ship.x + ship.radius;

            const dangerZoneTop = this.dangerZoneThickness;
            const dangerZoneBottom = this.height - this.dangerZoneThickness;
            const dangerZoneLeft = this.dangerZoneThickness;
            const dangerZoneRight = this.width - this.dangerZoneThickness;

            this.dangerTop = shipTop < dangerZoneTop;
            this.dangerBottom = shipBottom > dangerZoneBottom;
            this.dangerLeft = shipLeft < dangerZoneLeft;
            this.dangerRight = shipRight > dangerZoneRight;

            ship.inDangerZone = this.dangerTop || this.dangerRight || this.dangerBottom || this.dangerLeft;

            return (
                shipTop < this.height &&
                shipBottom > 0 &&
                shipLeft < this.width &&
                shipRight > 0
            );
        }
    }

    window.Board = Board;
}());
