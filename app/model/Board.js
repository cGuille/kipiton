(function () {
    "use strict";

    class Board {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.dangerZoneThickness = 20;
        }
    }

    window.Board = Board;
}());
