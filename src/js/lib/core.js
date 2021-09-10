// (() => {
//     const $ =function(selector) {
//         const elements = document.querySelectorAll(selector);
//         const obj = {};

//         obj.hide = () => {
//             elements.forEach(elem => {
//                 elem.style.display = 'none';
//             });
//             return obj;
//         };

//         obj.show = () => {
//             elements.forEach(elem => {
//                 elem.style.display = '';
//             });
//             return obj;
//         };

//         return obj;
//     };

//     window.$ = $;
// })();

// create API for get elements from DOM
const $ = function(selector) {
    return new $.prototype.init(selector);
};

// add in prototype of $, method init
$.prototype.init = function(selector) {
    // if selector null return empty object
    if (!selector) {
        return this; //  {}
    }
    // add in empty object(this) the seletor
    // we used "this" instead of "{}" for safe prototype name
    Object.assign(this, document.querySelectorAll(selector));
    // add property length in the prototype
    this.length = document.querySelectorAll(selector).length;
    // return all object
    return this;
};

// assign init prototype the $
// then we can use all method in init function from $   
$.prototype.init.prototype = $.prototype;

// add constant $ in global
window.$ = $;

export default $;

