(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', main);

    function main() {
        const canvas = document.getElementById('game');
        const sounds = { destroyed: document.getElementById('destroyed-sound') };
        new Game(canvas, sounds).start();
    }
}());

