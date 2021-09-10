import $ from "../core";

// add method show for display visible into $
$.prototype.show = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = '';
    }
    return this;
};

// add method hide for display hide into $
$.prototype.hide = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none';
    }
    return this;
};

// add method toggle for display toggle to hide and show into $
$.prototype.toggle = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }
    }
    return this;
};