(function () {
    "use strict";

    const INACTIVE_DANGER_ZONE_COLOR = "rgb(255, 150, 150)";
    const ACTIVE_DANGER_ZONE_COLOR = "rgb(220, 0, 0)";

    class BoardDrawer extends Drawer {
        _draw(board) {
            // Draw inactive danger zones
            if (!board.dangerTop) {
                drawTopDangerZone.call(this, board);
            }
            if (!board.dangerRight) {
                drawRightDangerZone.call(this, board);
            }
            if (!board.dangerBottom) {
                drawBottomDangerZone.call(this, board);
            }
            if (!board.dangerLeft) {
                drawLeftDangerZone.call(this, board);
            }

            // Draw active danger zones
            if (board.dangerTop) {
                drawTopDangerZone.call(this, board);
            }
            if (board.dangerRight) {
                drawRightDangerZone.call(this, board);
            }
            if (board.dangerBottom) {
                drawBottomDangerZone.call(this, board);
            }
            if (board.dangerLeft) {
                drawLeftDangerZone.call(this, board);
            }
        }
    }

    function drawTopDangerZone(board) {
        this.context.fillStyle = board.dangerTop ? ACTIVE_DANGER_ZONE_COLOR : INACTIVE_DANGER_ZONE_COLOR;
        this.context.fillRect(0, 0, board.width, board.dangerZoneThickness);
    }

    function drawRightDangerZone(board) {
        this.context.fillStyle = board.dangerRight ? ACTIVE_DANGER_ZONE_COLOR : INACTIVE_DANGER_ZONE_COLOR;
        this.context.fillRect(board.width - board.dangerZoneThickness, 0, board.dangerZoneThickness, board.height);
    }

    function drawBottomDangerZone(board) {
        this.context.fillStyle = board.dangerBottom ? ACTIVE_DANGER_ZONE_COLOR : INACTIVE_DANGER_ZONE_COLOR;
        this.context.fillRect(0, board.height - board.dangerZoneThickness, board.width, board.dangerZoneThickness);
    }

    function drawLeftDangerZone(board) {
        this.context.fillStyle = board.dangerLeft ? ACTIVE_DANGER_ZONE_COLOR : INACTIVE_DANGER_ZONE_COLOR;
        this.context.fillRect(0, 0, board.dangerZoneThickness, board.height);
    }

    window.BoardDrawer = BoardDrawer;
}());
