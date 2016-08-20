(function () {
    "use strict";

    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            init.call(this);
        }

        start() {
            run.call(this);
        }
    }

    function init() {
        this.ship = new Ship({ x: 50, y: 50 });

        this.renderer = new Renderer(this.canvas, new BoardDrawer(this.canvas), new ShipDrawer(this.canvas));
        this.renderer.addBoard(new Board(this.canvas.width, this.canvas.height, 20));
        this.renderer.addShip(this.ship);

        this.controller = new KeyboardController();
    }

    function run() {
        this.ship.dx = this.controller.updateDx(this.ship.dx);
        this.ship.dy = this.controller.updateDy(this.ship.dy);
        this.ship.move();

        this.renderer.render();
        requestAnimationFrame(run.bind(this));
    }

    window.Game = Game;
}());
