(function () {
    "use strict";

    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            init.call(this);
        }

        start() {
            this.isStarted = true;
            run.call(this);
        }

        stop() {
            this.isStarted = false;
        }
    }

    function init() {
        this.isStarted = false;
        this.board = new Board(this.canvas.width, this.canvas.height, 20);
        this.ship = new Ship({ x: this.board.width / 2, y: this.board.height / 2 });

        this.renderer = new Renderer(
            this.canvas,
            new BoardDrawer(this.canvas),
            new ShipDrawer(this.canvas)
        );

        this.renderer.addBoard(this.board);
        this.renderer.addShip(this.ship);

        this.controller = new KeyboardController();
    }

    function run() {
        if (!this.isStarted) {
            return;
        }

        this.ship.dx = this.controller.updateDx(this.ship.dx);
        this.ship.dy = this.controller.updateDy(this.ship.dy);
        this.ship.move();

        if (!this.board.contains(this.ship)) {
            console.log("Game Over!");
            this.stop();
            setTimeout(document.location.reload.bind(document.location), 500);
        }

        this.renderer.render();
        requestAnimationFrame(run.bind(this));
    }

    window.Game = Game;
}());
