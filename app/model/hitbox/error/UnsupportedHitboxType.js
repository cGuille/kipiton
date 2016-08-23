(function () {
    "use strict";

    class UnsupportedHitboxType extends Error {
        constructor(hitboxType) {
            super(`Unsupported hitbox type '${hitboxType}'`);
        }
    }

    window.UnsupportedHitboxType = UnsupportedHitboxType;
}());
