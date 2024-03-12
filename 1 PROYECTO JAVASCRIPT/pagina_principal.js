//Evento de la fecha 
document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    var dateElement = document.createElement('span');
    dateElement.textContent = currentDate;
    dateElement.style.marginRight = '50px'; // Ajuste el espacio aquí
    document.querySelector('.user-img').appendChild(dateElement);
});

// Evento del slider automático
$('.box').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});