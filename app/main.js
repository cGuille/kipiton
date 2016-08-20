(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', main);

    function main() {
        const canvas = document.getElementById('game');

        const renderer = new Renderer(new BoardDrawer(canvas), new ShipDrawer(canvas));

        renderer.addBoard(new Board(canvas.width, canvas.height, 20));
        renderer.addShip(new Ship({ x: 50, y: 50 }));

        renderer.render();
    }
}());

