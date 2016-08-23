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
        this.canvasHitbox = new RectHitbox(0, 0, this.canvas.width, this.canvas.height);
        this.countdown = new Countdown(10000);
        this.dangerZones = [
            new DangerZone(0, 0, this.canvas.width, 20), // top
            new DangerZone(this.canvas.width - 20, 0, 20, this.canvas.height), // right
            new DangerZone(0, this.canvas.height - 20, this.canvas.width, 20), // bottom
            new DangerZone(0, 0, 20, this.canvas.height), // left
        ];
        this.ship = new Ship({ x: this.canvas.width / 2, y: this.canvas.height / 2 });

        this.renderer = new Renderer(
            this.canvas,
            new CountdownDrawer(this.canvas),
            new TimerDrawer(this.canvas),
            new TimeBonusDrawer(this.canvas),
            new DangerZoneDrawer(this.canvas),
            new ShipDrawer(this.canvas),
            new GameOverDrawer(this.canvas),
            new PauseDrawer(this.canvas)
        );

        setUpNewTimeBonus.call(this);
        this.renderer.setCountdown(this.countdown);
        this.dangerZones.forEach((dangerZone) => { this.renderer.addDangerZone(dangerZone); });
        this.renderer.addShip(this.ship);

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

            handleCollisions.call(this);
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

    function handleCollisions() {
        if (!this.canvasHitbox.overlapsWith(this.ship.hitbox)) {
            this.gameOver();
        }

        this.ship.inDangerZone = false;
        this.dangerZones.forEach((dangerZone) => {
            if (dangerZone.hitbox.overlapsWith(this.ship.hitbox)) {
                dangerZone.activate();
                this.ship.inDangerZone = true;
            } else {
                dangerZone.deactivate();
            }
        });

        if (this.ship.hitbox.overlapsWith(this.timeBonus.hitbox)) {
            consumeTimeBonus.call(this);
        }
    }

    function consumeTimeBonus() {
        this.countdown.addTime(this.timeBonus.time);
        setUpNewTimeBonus.call(this);
    }

    function setUpNewTimeBonus() {
        const x = randomIntBetween(TimeBonus.RADIUS, this.canvas.width - TimeBonus.RADIUS);
        const y = randomIntBetween(TimeBonus.RADIUS, this.canvas.height - TimeBonus.RADIUS);
        const timeAmount = 2500;// ms

        this.timeBonus = new TimeBonus({ x: x, y: y }, nextBonusTimeAmount.call(this));
        this.renderer.setTimeBonus(this.timeBonus);
    }

    function nextBonusTimeAmount() {
        if (!this.timer) {
            return 4000;
        }

        const elapsedSeconds = this.timer.elapsedTime / 1000;

        if (elapsedSeconds < 10) {
            return 4000;
        }

        if (elapsedSeconds < 20) {
            return 3000;
        }

        if (elapsedSeconds < 30) {
            return 2000;
        }

        if (elapsedSeconds < 40) {
            return 1500;
        }

        if (elapsedSeconds < 60) {
            return 1000;
        }

        return 500;
    }

    function randomIntBetween(min, max) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }

    window.Game = Game;
}());
