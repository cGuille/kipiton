(function () {
    "use strict";

    class OrientationController extends EventEmitter {
        constructor() {
            super();

            this.dx = 0;
            this.dy = 0;

            window.addEventListener('deviceorientation', (event) => {
                handleOrientation.call(this,
                    event.absolute,
                    event.alpha,
                    event.beta,
                    event.gamma
                );
            });
        }

        updateDx(dx) {
            return dx + (sameSign(this.dx, dx) ? this.dx : 2 * this.dx);
        }

        updateDy(dy) {
            return dy + (sameSign(this.dy, dy) ? this.dy : 2 * this.dy);
        }
    }

    function handleOrientation(absolute, alpha, beta, gamma) {
        // console.log('absolute:', absolute);
        // console.log('alpha:', alpha);
        // console.log('beta:', beta);
        // console.log('gamma:', gamma);

        if (gamma > 5) {
            this.dy = -0.05;
        } else if (gamma < -5) {
            this.dy = 0.05;
        } else {
            this.dy = 0;
        }

        if (beta > 5) {
            this.dx = 0.05;
        } else if (beta < -5) {
            this.dx = -0.05;
        } else {
            this.dx = 0;
        }
    }

    function sameSign(n1, n2) {
        return (n1 < 0) === (n2 < 0);
    }

    window.OrientationController = OrientationController;
}());
