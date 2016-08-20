(function () {
    "use strict";

    class Drawer {
        constructor(canvas) {
            this.canvas = canvas;
            this.context = canvas.getContext('2d');
        }

        draw() {
            this.context.save();
            this._draw(...arguments);
            this.context.restore();
        }
    }

    window.Drawer = Drawer;
}());
