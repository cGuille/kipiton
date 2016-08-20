(function () {
    "use strict";

    const BACKGROUND_COLOR = "rgb(150, 0, 0)";
    const TEXT_BORDER_COLOR = "rgb(0, 0, 0)";
    const TEXT_COLOR = "rgb(230, 255, 255)";

    class GameOverDrawer extends Drawer {
        _draw() {
            this.context.fillStyle = BACKGROUND_COLOR;
            this.context.fillRect(100, 90, this.canvas.width - 100 * 2, this.canvas.height - 110 * 2);

            this.context.font = "100px impact";
            this.context.strokeStyle = TEXT_BORDER_COLOR;
            this.context.strokeText("Game Over!",170, 210);
            this.context.fillStyle = TEXT_COLOR;
            this.context.fillText("Game Over!",170, 210);
        }
    }

    window.GameOverDrawer = GameOverDrawer;
}());
