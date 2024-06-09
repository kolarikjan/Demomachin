const containerLeft = () => {
    if ($('.container-left').length && $(window).width() > 1475 ) {
        let left = $('.header .container').offset().left;
        $('.container-left').css("margin-left", left);
    }
}
$(document).ready(function () {
    
    $('.header-banner-slider').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        margin:0,
        nav:false,
        dots:false
    });

    $('.reviews2-slider').owlCarousel({
        items:3,
        loop:false,
        rewind:true,
        navText:['<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" width="16" height="12"><path id="-e-icon-arrow" class="s0" d="m15 5.5l-4.6-4.7c-0.4-0.4-1-0.4-1.4 0-0.4 0.4-0.4 1 0 1.4l2.9 3h-10.6c-0.6 0-1 0.4-1 1 0 0.5 0.4 1 1 1h10.6l-2.9 3c-0.4 0.4-0.4 1 0 1.4q0.3 0.3 0.7 0.3 0.4 0 0.7-0.3l4.6-4.7c0.2-0.2 0.2-0.5 0.2-0.7q0-0.4-0.2-0.7z"/></svg>','<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" width="16" height="12"><path id="-e-icon-arrow" class="s0" d="m15 5.5l-4.6-4.7c-0.4-0.4-1-0.4-1.4 0-0.4 0.4-0.4 1 0 1.4l2.9 3h-10.6c-0.6 0-1 0.4-1 1 0 0.5 0.4 1 1 1h10.6l-2.9 3c-0.4 0.4-0.4 1 0 1.4q0.3 0.3 0.7 0.3 0.4 0 0.7-0.3l4.6-4.7c0.2-0.2 0.2-0.5 0.2-0.7q0-0.4-0.2-0.7z"/></svg>'],
        margin:20,
        nav:true,
        dots:true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });

    containerLeft();

    // toto je duplicitni s prvni sablonou

    Fancybox.bind("[data-fancybox]", {});

    document.querySelector('.navbar-toggler').addEventListener('click', function () {

        document.querySelector('.animated-icon').classList.toggle('open');

    });

    // konec duplicitnich

});
$(window).resize(function () { 
    containerLeft();
});

