(function () {
    "use strict";

    class Renderer {
        constructor(canvas, boardDrawer, shipDrawer, gameOverDrawer) {
            this.gameIsOver = false;
            this.canvas = canvas;
            this.context = canvas.getContext('2d');

            this.drawBoard = boardDrawer.draw.bind(boardDrawer);
            this.drawShip = shipDrawer.draw.bind(shipDrawer);
            this.gameOverDrawer = gameOverDrawer;

            this.boards = [];
            this.ships = [];
        }

        addBoard(board) {
            this.boards.push(board);
        }

        addShip(ship) {
            this.ships.push(ship);
        }

        gameOver() {
            this.gameIsOver = true;
        }

        render() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            renderGame.call(this);
            if (this.gameIsOver) {
                renderGameOver.call(this);
            }
        }
    }

    function renderGame() {
        this.boards.forEach(this.drawBoard);
        this.ships.forEach(this.drawShip);
    }

    function renderGameOver() {
        this.gameOverDrawer.draw();
    }

    window.Renderer = Renderer;
}());
