
const checkVisible = (elm) => {

    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);

}

const numbersAnimation = () => {
    
    const counters = document.querySelectorAll('.numbers-col-number');
    let speed = 500;

    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-value');
        if (value < 100) {
            speed = 500;
        } else if (value < 200) {
            speed = 75;
        } else {
            speed = 50;
        }
        const data = +counter.innerText;
        
        const time = value / speed;
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 20);
            }
            else{
            counter.innerText = value;
            }
        }
        
        animate();

    });
}

$(document).ready(function () {
    
    Fancybox.bind("[data-fancybox]", {});

    $(".popup-activator").click(function (e) {

        $(this).closest(".popup-custom").children(".popup-content").css("display", "block");

    });

    $(".popup-content--close").click(function (e) { 

        e.preventDefault();
        
        $(this).closest(".popup-content").css("display", "none");
        
    });

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

    $('.section-block-textimage').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:["<img src='img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-prev'>","<img src='img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-next'>"],
        margin:1,
        nav:true,
        dots:true
    });

    $('.section-block-gallery').owlCarousel({
        items:1,
        loop:true,
        rewind:true,
        navText:["<img src='img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-prev'>","<img src='img/arrow-dropdown-black.png' alt='slider arrow' class='section-block-textimage-next'>"],
        margin:24,
        nav:true,
        dots:false
    });

    document.querySelector('.navbar-toggler').addEventListener('click', function () {

        document.querySelector('.animated-icon').classList.toggle('open');

    });

    $(".section-block-dropdowns-header").click(function (e) { 
        e.preventDefault();
        let body = $(this).parent();
        if (body.hasClass("active")) {
            body.removeClass("active");
        }else {
            body.addClass("active");
        }
    });
    
    $(".header-message-close").click(function (e) { 
        e.preventDefault();
        $(".header-message").addClass("d-none");
    });

});
var run = false;
$(window).scroll(function () { 
    if ($('.numbers-col-text').length) {
        if (checkVisible(document.querySelector('.numbers-col-text')) && !run) {
            run = true;
            setTimeout(function(){
            numbersAnimation();
            }, );
        }
    }
});

