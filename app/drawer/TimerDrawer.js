(function () {
    "use strict";

    const TEXT_COLOR = "rgb(50, 50, 50)";

    class TimerDrawer extends Drawer {
        _draw(timer) {
            this.context.font = "20px impact";
            this.context.fillStyle = TEXT_COLOR;
            this.context.fillText("SCORE: " + formatTimer(timer.elapsedTime), 25, this.canvas.height - 25);
        }
    }

    function formatTimer(milliseconds) {
        const minutes = Math.floor(milliseconds / 60000);
        milliseconds %= 60000;

        const seconds = zfill(2, Math.floor(milliseconds / 1000));
        milliseconds %= 1000;

        const hundredth = zfill(2, Math.floor(milliseconds / 10));

        return `${minutes}'${seconds}"${hundredth}`;
    }

    function zfill(minLength, num) {
        const numString = num.toString(10);

        if (numString.length >= minLength) {
            return numString;
        }

        return '0'.repeat(minLength - numString.length) + numString;
    }

    window.TimerDrawer = TimerDrawer;
}());
