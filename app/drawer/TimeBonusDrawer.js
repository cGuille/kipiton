(function () {
    "use strict";

    const COLOR = "rgb(0, 120, 50)";

    const _2_PI = Math.PI * 2;

    class TimeBonusDrawer extends Drawer {
        _draw(timeBonus) {
            this.context.beginPath();
            this.context.arc(timeBonus.x, timeBonus.y, timeBonus.radius, 0, _2_PI);
            this.context.fillStyle = COLOR;
            this.context.fill();
            this.context.closePath();
        }
    }

    window.TimeBonusDrawer = TimeBonusDrawer;
}());
