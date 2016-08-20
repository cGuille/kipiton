(function () {
    "use strict";

    class Renderer {
        constructor(canvas, boardDrawer, shipDrawer) {
            this.canvas = canvas;
            this.context = canvas.getContext('2d');

            this.drawBoard = boardDrawer.draw.bind(boardDrawer);
            this.drawShip = shipDrawer.draw.bind(shipDrawer);

            this.boards = [];
            this.ships = [];
        }

        addBoard(board) {
            this.boards.push(board);
        }

        addShip(ship) {
            this.ships.push(ship);
        }

        render() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.boards.forEach(this.drawBoard);
            this.ships.forEach(this.drawShip);
        }
    }

    window.Renderer = Renderer;
}());
