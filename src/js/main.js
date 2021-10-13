import './lib/lib';

// $('#first').on('click', () => {
//     $('div').eq(1).fadeOut(800);
// });
$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});
$('.reds').addClass('Hi');
// $('button').eq(2).on('click', () => {
//     $('.w-33').fadeOut(800);
// });
// $('[data-show="show"]').on('click', () => {
//     $('.w-33').fadeIn(800);
// });