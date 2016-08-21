(function () {
    "use strict";

    class Renderer {
        constructor(canvas, countdownDrawer, timerDrawer, boardDrawer, shipDrawer, gameOverDrawer, pauseDrawer) {
            this.gameIsOver = false;
            this.canvas = canvas;
            this.context = canvas.getContext('2d');

            this.countdownDrawer = countdownDrawer;
            this.timerDrawer = timerDrawer;
            this.drawBoard = boardDrawer.draw.bind(boardDrawer);
            this.drawShip = shipDrawer.draw.bind(shipDrawer);
            this.gameOverDrawer = gameOverDrawer;
            this.pauseDrawer = pauseDrawer;

            this.boards = [];
            this.ships = [];
        }

        setCountdown(countdown) {
            this.countdown =countdown;
        }

        setTimer(timer) {
            this.timer =timer;
        }

        addBoard(board) {
            this.boards.push(board);
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
        this.countdownDrawer.draw(this.countdown);
        this.timerDrawer.draw(this.timer);
        this.boards.forEach(this.drawBoard);
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
