//Evento de la fecha 
document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    var dateElement = document.createElement('span');
    dateElement.textContent = currentDate;
    dateElement.style.marginRight = '50px';
    document.querySelector('.user-img').appendChild(dateElement);
});

// Evento para el slider
$(document).ready(function () {
    $('.comedia-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    $('.ficcion-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    $('.romanticas-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });

    $('.terror-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});

// Evento para el botón de eliminar género
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn_eliminar_filtro').addEventListener('click', function () {
        var confirmacion = confirm('¿Estás seguro de que deseas eliminar los filtros?');
        if (confirmacion) {
            var radios = document.querySelectorAll('input[type="radio"]');
            radios.forEach(function (radio) {
                if (radio.checked) {
                    radio.checked = false;
                }
            });
        }
    });

    // Evento para el botón de buscar género
    document.getElementById('btn_buscar_genero').addEventListener('click', function () {
        var selectedGenre = document.querySelector('.zona_filtros input:checked');
        if (selectedGenre) {
            var genreId = selectedGenre.value;
            if (genreId === "comedia") {
                location.href = '#comedia';
            } else if (genreId === "ciencia ficcion") {
                location.href = '#ficcion';
            } else if (genreId === "romanticas") {
                location.href = '#romanticas';
            } else if (genreId === "terror") {
                location.href = '#terror';
            } else {
                alert('Género no reconocido.');
            }
        } else {
            alert('Por favor selecciona un género antes de buscar.');
        }
    });
});
