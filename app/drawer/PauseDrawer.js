(function () {
    "use strict";

    const TEXT_COLOR = "rgb(60, 135, 60)";
    const TEXT_BORDER_COLOR = "rgb(255, 255, 255)";

    class PauseDrawer extends Drawer {
        _draw() {
            this.context.font = "80px impact";
            this.context.strokeStyle = TEXT_BORDER_COLOR;
            this.context.strokeText("Game Paused",170, 210);
            this.context.fillStyle = TEXT_COLOR;
            this.context.fillText("Game Paused",170, 210);
        }
    }

    window.PauseDrawer = PauseDrawer;
}());
