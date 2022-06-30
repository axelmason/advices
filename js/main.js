$(document).ready(function () {
    var img = document.querySelector('.advice-block__button img');
    
    $('.advice-block__button').on('click', function() {
        $(this).find('img').addClass('spin');
        fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            $('.advice-block__num').html(data.slip.id);
            $('.advice-block__text').html(data.slip.advice);
        });
    });

    img.addEventListener('transitionend', e => {
        img.classList.remove('spin');
    })
});