(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', main);

    function main() {
        new Game(document.getElementById('game')).start();
    }
}());

