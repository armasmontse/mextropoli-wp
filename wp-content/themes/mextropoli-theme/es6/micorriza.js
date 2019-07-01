import {$, w} from './constants';
import './slider'
import './menu'
// import './masonry'
import './modal'
import './page-top'
import './double-id'

w.load(() => {

});

document.addEventListener('click',function(e){

    if(document.getElementsByClassName("programa").length>0){

        if( e.target.className== 'card-day__fecha toggable'){
            e.target.className='card-day__fecha toggable openToogle';
        }else if(e.target.className=='card-day__fecha toggable openToogle'){
            e.target.className='card-day__fecha toggable';
        }
    };
});

$(document).ready(function() {
    console.log('Hello world from El Cultivo!');
    console.log('Hello world desde micorriza actualizado sin masonry');

    // Botón Biografía
    function menuFixed() {
        var $fixed = $('#boton-fixed');
        var $submenu = $('.submenu-hover');

        if ($(window).scrollTop() > 430)
            $fixed.css({
                'position': 'fixed',
                'top': '0px',
            });

        else
            $fixed.css({
                'position': 'relative',
                'top': 'auto'
            });
    }

    $(window).scroll(menuFixed);

    // Prueba Zoom Arbol

    //CRONOLOGIA
    var dropdown = $(".boton");
    var lista = $(".listado-hover");
    var open = false;

    dropdown.on("click", function() {

        // Si está abierto hay que cerrarlo.
        if(open) {
            lista.removeClass('opacidad');
            console.log('REMOVE OPACCITY')
            open = false;
        }else {
            lista.addClass('opacidad');
            console.log('ADD OPACCITY')
            open = true;
        }

    });

})
