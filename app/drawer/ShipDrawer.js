(function () {
    "use strict";

    const _2_PI = Math.PI * 2;

    class ShipDrawer extends Drawer {
        _draw(ship) {
            this.context.beginPath();
            this.context.arc(ship.x, ship.y, ship.diameter, 0, _2_PI);
            this.context.fillStyle = "#0095DD";
            this.context.fill();
            this.context.closePath();
        }
    }

    window.ShipDrawer = ShipDrawer;
}());
