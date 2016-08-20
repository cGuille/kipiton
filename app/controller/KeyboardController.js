(function () {
    "use strict";

    const KEY_CODE = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,

        p: 112,
        P: 80,
    };

    class KeyboardController extends EventEmitter {
        constructor() {
            super();

            this.leftPressed = false;
            this.upPressed = false;
            this.rightPressed = false;
            this.downPressed = false;

            setUpListeners.call(this);
        }

        updateDx(dx) {
            if (this.leftPressed) {
                dx -= 0.5
            }
            if (this.rightPressed) {
                dx += 0.5
            }
            return dx;
        }

        updateDy(dy) {
            if (this.upPressed) {
                dy -= 0.5
            }
            if (this.downPressed) {
                dy += 0.5
            }
            return dy;
        }
    }

    function setUpListeners() {
        window.addEventListener('keydown', handleKeyDown.bind(this));
        window.addEventListener('keyup', handleKeyUp.bind(this));
        window.addEventListener('keypress', handleKeyPress.bind(this));
    }

    function handleKeyDown(event) {
        switch (event.keyCode) {
            case KEY_CODE.UP:
                this.upPressed = true;
                break;
            case KEY_CODE.LEFT:
                this.leftPressed = true;
                break;
            case KEY_CODE.RIGHT:
                this.rightPressed = true;
                break;
            case KEY_CODE.DOWN:
                this.downPressed = true;
                break;
        }
    }

    function handleKeyUp(event) {
        switch (event.keyCode) {
            case KEY_CODE.UP:
                this.upPressed = false;
                break;
            case KEY_CODE.LEFT:
                this.leftPressed = false;
                break;
            case KEY_CODE.RIGHT:
                this.rightPressed = false;
                break;
            case KEY_CODE.DOWN:
                this.downPressed = false;
                break;
        }
    }

    function handleKeyPress(event) {
        if (event.keyCode === KEY_CODE.p || event.keyCode === KEY_CODE.P) {
            this.emit('switch-pause');
        }
    }

    window.KeyboardController = KeyboardController;
}());
