(function () {
    "use strict";

    const TEXT_COLOR = "rgb(50, 50, 50)";
    const CRITICAL_TEXT_COLOR = "rgb(200, 50, 50)";

    const CRITICAL_COUNTDOWN_THRESHOLD = 5000;

    class CountdownDrawer extends Drawer {
        _draw(countdown) {
            this.context.font = "20px impact";
            this.context.fillStyle = countdown.value < CRITICAL_COUNTDOWN_THRESHOLD ? CRITICAL_TEXT_COLOR : TEXT_COLOR;
            this.context.fillText("COUNTDOWN: " + formatTimer(countdown.value), 25, 45);
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

    window.CountdownDrawer = CountdownDrawer;
}());
