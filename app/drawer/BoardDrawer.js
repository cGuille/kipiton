(function () {
    "use strict";

    const DANGER_ZONE_COLOR = "rgba(200, 20, 20, 0.4)";

    class BoardDrawer extends Drawer {
        _draw(board) {
            this.context.fillStyle = DANGER_ZONE_COLOR;

            // Top, right, bottom then left:
            this.context.fillRect(0, 0, board.width, board.dangerZoneThickness);
            this.context.fillRect(board.width - board.dangerZoneThickness, board.dangerZoneThickness, board.dangerZoneThickness, board.height - board.dangerZoneThickness * 2);
            this.context.fillRect(0, board.height - board.dangerZoneThickness, board.width, board.dangerZoneThickness);
            this.context.fillRect(0, board.dangerZoneThickness, board.dangerZoneThickness, board.height - board.dangerZoneThickness * 2);
        }
    }

    window.BoardDrawer = BoardDrawer;
}());
