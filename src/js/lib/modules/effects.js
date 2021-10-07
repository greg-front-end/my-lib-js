import $ from "../core";

$.prototype.animatedOverTime = function(duration, cb, fin) {
    let timeStart = null;

    function _animatedOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / duration, 1);

        cb(complection);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animatedOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }
    return _animatedOverTime;
};

$.prototype.fadeIn = function(duration, display, fin) {
    for  (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animatedOverTime(duration, _fadeIn, fin);
        requestAnimationFrame(ani);
    }
    return this; 
};

$.prototype.fadeOut = function(duration, fin) {
    for  (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animatedOverTime(duration, _fadeOut, fin);
        requestAnimationFrame(ani);
    }
    return this; 
};