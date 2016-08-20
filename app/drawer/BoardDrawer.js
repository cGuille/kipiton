(function () {
    "use strict";

    const INACTIVE_DANGER_ZONE_COLOR = "rgb(255, 150, 150)";
    const ACTIVE_DANGER_ZONE_COLOR = "rgb(220, 0, 0)";

    class BoardDrawer extends Drawer {
        _draw(board) {
            this.context.fillStyle = board.dangerTop ? ACTIVE_DANGER_ZONE_COLOR : INACTIVE_DANGER_ZONE_COLOR;
            this.context.fillRect(0, 0, board.width, board.dangerZoneThickness);

            this.context.fillStyle = board.dangerRight ? ACTIVE_DANGER_ZONE_COLOR : INACTIVE_DANGER_ZONE_COLOR;
            this.context.fillRect(board.width - board.dangerZoneThickness, 0, board.dangerZoneThickness, board.height);

            this.context.fillStyle = board.dangerBottom ? ACTIVE_DANGER_ZONE_COLOR : INACTIVE_DANGER_ZONE_COLOR;
            this.context.fillRect(0, board.height - board.dangerZoneThickness, board.width, board.dangerZoneThickness);

            this.context.fillStyle = board.dangerLeft ? ACTIVE_DANGER_ZONE_COLOR : INACTIVE_DANGER_ZONE_COLOR;
            this.context.fillRect(0, 0, board.dangerZoneThickness, board.height);
        }
    }

    window.BoardDrawer = BoardDrawer;
}());
