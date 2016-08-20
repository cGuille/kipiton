(function () {
    "use strict";

    class Board {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.dangerZoneThickness = 20;
        }

        contains(ship) {
            const shipTop = ship.y - ship.radius;
            const shipBottom = ship.y + ship.radius;
            const shipLeft = ship.x - ship.radius;
            const shipRight = ship.x + ship.radius;

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
