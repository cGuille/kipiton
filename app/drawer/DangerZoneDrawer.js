(function () {
    "use strict";

    const INACTIVE_COLOR = "rgb(255, 150, 150)";
    const ACTIVE_COLOR = "rgb(220, 0, 0)";

    class DangerZoneDrawer extends Drawer {
        _draw(dangerZone) {
            this.context.fillStyle = dangerZone.isActive() ? ACTIVE_COLOR : INACTIVE_COLOR;
            this.context.fillRect(dangerZone.x, dangerZone.y, dangerZone.width, dangerZone.height);
        }
    }

    window.DangerZoneDrawer = DangerZoneDrawer;
}());
