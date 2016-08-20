(function () {
    "use strict";

    class Renderer {
        constructor(boardDrawer, shipDrawer) {
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
            this.boards.forEach(this.drawBoard);
            this.ships.forEach(this.drawShip);
        }
    }

    window.Renderer = Renderer;
}());
