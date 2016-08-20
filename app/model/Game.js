(function () {
    "use strict";

    class Game {
        constructor(canvas, sounds) {
            this.canvas = canvas;
            this.sounds = sounds;
            init.call(this);
        }

        start() {
            this.isStarted = true;
            run.call(this);
        }

        switchPause() {
            this.isPaused = !this.isPaused;
            this.renderer.setPaused(this.isPaused);

            if (!this.isPaused) {
                run.call(this);
            }
        }

        stop() {
            this.isStarted = false;
        }
    }

    function init() {
        this.isStarted = false;
        this.isPaused = false;
        this.board = new Board(this.canvas.width, this.canvas.height, 20);
        this.ship = new Ship({ x: this.board.width / 2, y: this.board.height / 2 });

        this.renderer = new Renderer(
            this.canvas,
            new BoardDrawer(this.canvas),
            new ShipDrawer(this.canvas),
            new GameOverDrawer(this.canvas),
            new PauseDrawer(this.canvas)
        );

        this.renderer.addBoard(this.board);
        this.renderer.addShip(this.ship);

        this.controller = new KeyboardController();
        this.controller.on('switch-pause', this.switchPause.bind(this));
    }

    function run() {
        if (!this.isStarted) {
            return;
        }

        if (!this.isPaused) {
            this.ship.dx = this.controller.updateDx(this.ship.dx);
            this.ship.dy = this.controller.updateDy(this.ship.dy);
            this.ship.move();

            if (!this.board.contains(this.ship)) {
                this.renderer.gameOver();
                this.sounds.destroyed.play();
                this.stop();
                window.addEventListener('keypress', document.location.reload.bind(document.location));
            }
        }

        this.renderer.render();

        if (!this.isPaused) {
            requestAnimationFrame(run.bind(this));
        }
    }

    window.Game = Game;
}());
