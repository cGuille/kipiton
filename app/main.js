(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', main);

    function main() {
        const instructionsElt = document.getElementById('instructions');
        const canvasElt = document.getElementById('game');
        const goFullscreenBtnElt = document.getElementById('go-fullscreen-btn');
        const sounds = {
            danger: document.getElementById('danger-sound'),
            destroyed: document.getElementById('destroyed-sound'),
        };

        let game;

        document.addEventListener('webkitfullscreenchange', function () {
            if (document.webkitIsFullScreen) {
                screen.orientation.lock('landscape-primary');
                instructionsElt.classList.add('not-displayed');
                canvasElt.classList.remove('not-displayed');
                game.start();
            } else {
                screen.orientation.unlock();
                instructionsElt.classList.remove('not-displayed');
                canvasElt.classList.add('not-displayed');
                game.stop();
            }
        });

        goFullscreenBtnElt.addEventListener('click', function () {
            if (!game || game.hasEnded()) {
                game = new Game(canvasElt, sounds);
            }
            canvasElt.webkitRequestFullscreen();
        });
    }
}());

