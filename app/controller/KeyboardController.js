(function () {
    "use strict";

    const LEFT_KEY_CODE = 37;
    const UP_KEY_CODE = 38;
    const RIGHT_KEY_CODE = 39;
    const DOWN_KEY_CODE = 40;

    class KeyboardController {
        constructor() {
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
    }

    function handleKeyDown(event) {
        switch (event.keyCode) {
            case UP_KEY_CODE:
                this.upPressed = true;
                break;
            case LEFT_KEY_CODE:
                this.leftPressed = true;
                break;
            case RIGHT_KEY_CODE:
                this.rightPressed = true;
                break;
            case DOWN_KEY_CODE:
                this.downPressed = true;
                break;
        }
    }

    function handleKeyUp(event) {
        switch (event.keyCode) {
            case UP_KEY_CODE:
                this.upPressed = false;
                break;
            case LEFT_KEY_CODE:
                this.leftPressed = false;
                break;
            case RIGHT_KEY_CODE:
                this.rightPressed = false;
                break;
            case DOWN_KEY_CODE:
                this.downPressed = false;
                break;
        }
    }

    window.KeyboardController = KeyboardController;
}());
