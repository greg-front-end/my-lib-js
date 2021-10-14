import $ from "../core";

$.prototype.dropwdown = function() {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

$('.dropdown-toggle').dropwdown();

//** if the html elements created dinamical */ 
// $('div').html(
//     `<div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown menu</button>
//         <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
//             <a href="#" class="dropdown-link">Action #1</a>
//             <a href="#" class="dropdown-link">Action #2</a>
//             <a href="#" class="dropdown-link">Action #3</a>
//         </div>
//     </div>
//     `
// );
//** and should call the dropdown method again */ 
// $('.dropdown-toggle').dropwdown();