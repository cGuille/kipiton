(function () {
    "use strict";

    class Renderer {
        constructor(canvas, countdownDrawer, timerDrawer, timeBonusDrawer, dangerZoneDrawer, shipDrawer, gameOverDrawer, pauseDrawer) {
            this.gameIsOver = false;
            this.canvas = canvas;
            this.context = canvas.getContext('2d');

            this.countdownDrawer = countdownDrawer;
            this.timerDrawer = timerDrawer;
            this.timeBonusDrawer = timeBonusDrawer;
            this.drawDangerZone = dangerZoneDrawer.draw.bind(dangerZoneDrawer);
            this.drawShip = shipDrawer.draw.bind(shipDrawer);
            this.gameOverDrawer = gameOverDrawer;
            this.pauseDrawer = pauseDrawer;

            this.dangerZones = [];
            this.ships = [];
        }

        setCountdown(countdown) {
            this.countdown =countdown;
        }

        setTimer(timer) {
            this.timer =timer;
        }

        setTimeBonus(timeBonus) {
            this.timeBonus = timeBonus;
        }

        addDangerZone(dangerZone) {
            this.dangerZones.push(dangerZone);
        }

        addShip(ship) {
            this.ships.push(ship);
        }

        gameOver() {
            this.gameIsOver = true;
            renderGameOver.call(this);
        }

        setPaused(paused) {
            this.gameIsPaused = paused;
            renderPause.call(this);
        }

        render() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            renderGame.call(this);
            if (this.gameIsOver) {
                renderGameOver.call(this);
            }
            if (this.gameIsPaused) {
                renderPause.call(this);
            }
        }
    }

    function renderGame() {
        // Draw inactive danger zones:
        this.dangerZones
            .filter((dangerZone) => { return !dangerZone.isActive(); })
            .forEach(this.drawDangerZone);

        // THEN, draw active danger zones:
        this.dangerZones
            .filter((dangerZone) => { return dangerZone.isActive(); })
            .forEach(this.drawDangerZone);

        // Draw countdown and timer:
        this.countdownDrawer.draw(this.countdown);
        this.timerDrawer.draw(this.timer);

        // Draw time bonus and ship:
        this.timeBonusDrawer.draw(this.timeBonus);
        this.ships.forEach(this.drawShip);
    }

    function renderGameOver() {
        this.gameOverDrawer.draw();
    }

    function renderPause() {
        this.pauseDrawer.draw();
    }

    window.Renderer = Renderer;
}());
