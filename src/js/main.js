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

// create modal
$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title #3',
        body: 'It is third modal which we create with JS'
    },
    btns: {
        count: 2,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Everythigs saved!');
                }
            ]
        ]
    }
}));