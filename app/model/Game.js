(function () {
    "use strict";

    class Game {
        constructor(canvas, sounds) {
            this.canvas = canvas;
            this.sounds = sounds;
            init.call(this);
        }

        start() {
            this.timer = new Timer(Date.now());
            this.renderer.setTimer(this.timer);
            this.countdown.start();

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

        gameOver() {
            this.renderer.gameOver();
            this.sounds.destroyed.play();
            this.stop();
            window.addEventListener('keypress', document.location.reload.bind(document.location));
        }
    }

    function init() {
        this.isStarted = false;
        this.isPaused = false;
        this.countdown = new Countdown(10000);
        this.board = new Board(this.canvas.width, this.canvas.height, 20);
        this.ship = new Ship({ x: this.board.width / 2, y: this.board.height / 2 });

        this.renderer = new Renderer(
            this.canvas,
            new CountdownDrawer(this.canvas),
            new TimerDrawer(this.canvas),
            new TimeBonusDrawer(this.canvas),
            new BoardDrawer(this.canvas),
            new ShipDrawer(this.canvas),
            new GameOverDrawer(this.canvas),
            new PauseDrawer(this.canvas)
        );

        this.renderer.setCountdown(this.countdown);
        this.renderer.addBoard(this.board);
        this.renderer.addShip(this.ship);
        newTimeBonus.call(this);

        this.controller = new KeyboardController();
        this.controller.on('switch-pause', this.switchPause.bind(this));

        this.countdown.on('timeout', this.gameOver.bind(this));
    }

    function run() {
        if (!this.isStarted) {
            this.sounds.danger.pause();
            return;
        }

        if (!this.isPaused) {
            this.countdown.update();
            this.timer.currentTime = Date.now();

            this.ship.dx = this.controller.updateDx(this.ship.dx);
            this.ship.dy = this.controller.updateDy(this.ship.dy);
            this.ship.move();

            if (!this.board.contains(this.ship)) {
                this.gameOver();
            }
        }

        if (this.ship.alert && this.sounds.danger.paused) {
            this.sounds.danger.play();
        } else if (!this.ship.alert && !this.sounds.danger.paused) {
            this.sounds.danger.pause();
        }

        this.renderer.render();

        if (this.isPaused) {
            this.sounds.danger.pause();
        } else {
            requestAnimationFrame(run.bind(this));
        }
    }

    function newTimeBonus() {
        const position = { x: this.board.width / 2, y: 30 };
        const timeAmount = 10000;
        this.timeBonus = new TimeBonus(position, timeAmount);
        this.renderer.setTimeBonus(this.timeBonus);
    }

    window.Game = Game;
}());
