(function () {
    "use strict";

    const SHIP_COLOR = "rgb(0, 120, 190)";
    const SHIP_ALERT_COLOR = "rgb(255, 225, 30)";

    const _2_PI = Math.PI * 2;

    class ShipDrawer extends Drawer {
        _draw(ship) {
            this.context.beginPath();
            this.context.arc(ship.x, ship.y, ship.radius, 0, _2_PI);
            this.context.fillStyle = ship.alert ? SHIP_ALERT_COLOR : SHIP_COLOR;
            this.context.fill();
            this.context.closePath();
        }
    }

    window.ShipDrawer = ShipDrawer;
}());
