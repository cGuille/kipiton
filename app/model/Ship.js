(function () {
    "use strict";

    class Ship {
        constructor(position) {
            this.x = position.x;
            this.y = position.y;
            this.radius = 30;
        }
    }

    window.Ship = Ship;
}());
