// search icon script
$(document).ready(function() {
    if ($(window).width() <= 1024) {
        const $searchIcon = $('#search-icon');
        const $searchInput = $('#search-input');

        $searchIcon.on('click', function() {
            $searchInput.toggleClass('visible');
        });

        $(document).on('click', function(event) {
            if (!$(event.target).closest('.search_field').length && $searchInput.hasClass('visible')) {
                $searchInput.removeClass('visible').val(''); // Hide input and clear the field
            }
        });
    }


      
 
});





//  homepage banner 
const swiper = new Swiper(".banner_slider", {
    loop: true,
    slidesPerView: 1,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    }

});


// gift form add 

   $(document).ready(function() {
        $('#sendgift, label[for="sendgift"]').on('click', function() {
            $('.left_block').toggleClass('sender_gift ');
        });

        $('#sendgift').on('change', function() {
            $('.left_block').toggleClass('sender_gift ');
        });
    });


// Get the delivery text element
const navHeader = document.querySelector('.page-header');
const scrollThreshold2 = 47;

function throttle(fn, wait) {
    let lastTime = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastTime >= wait) {
            lastTime = now;
            fn(...args);
        }
    };
}

const handleScroll = () => {
    if (window.scrollY > scrollThreshold2) {
        navHeader.classList.add('remove_space');
    } else {
        navHeader.classList.remove('remove_space');
    }
};

window.addEventListener('scroll', throttle(handleScroll, 0));


$('.swiper-container').each(function(index) {
    var $this = $(this);
    var sliderId = $this.data('slider-id');

    $this.addClass('swiper-slider-' + sliderId);

    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 300;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 4;
    var slidesSmallDesktop = $this.data('slides-small-desktop') ? $this.data('slides-small-desktop') : 4;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 3;
    var slidesLargeMobile = $this.data('slides-mobile') ? $this.data('slides-large-mobile') : 2;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 2;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 15;

    var swiper = new Swiper('.swiper-slider-' + sliderId, {
        direction: 'horizontal',
        loop: loop,
        freeMode: freeMode,
        spaceBetween: spaceBetween,
        breakpoints: {
            1400: {
                // above 1400 4
                slidesPerView: slidesDesktop
            },
            1080:{
                // 1080-1399 4
                slidesPerView: slidesSmallDesktop
            },
            768: {
                // 768-1079 3
                slidesPerView: slidesTablet
            },
            400: {
                // 400-767 2
                slidesPerView: slidesLargeMobile
            },
            300: {
                // 300-399 1
                slidesPerView: slidesMobile
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: dragSize
        }
    });
});


$('..gift_gallery').each(function(index) {
    var $this = $(this);
    var sliderId = $this.data('slider-id');

    $this.addClass('swiper-slider-' + sliderId);

    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 300;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 1;
    var slidesSmallDesktop = $this.data('slides-small-desktop') ? $this.data('slides-small-desktop') : 4;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 3;
    var slidesLargeMobile = $this.data('slides-mobile') ? $this.data('slides-large-mobile') : 2;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 2;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 15;

    var swiper = new Swiper('.swiper-slider-' + sliderId, {
        direction: 'horizontal',
        loop: loop,
        freeMode: freeMode,
        spaceBetween: spaceBetween,
        breakpoints: {
            1400: {
                // above 1400 4
                slidesPerView: slidesDesktop
            },
            1080:{
                // 1080-1399 4
                slidesPerView: slidesSmallDesktop
            },
            768: {
                // 768-1079 3
                slidesPerView: slidesTablet
            },
            400: {
                // 400-767 2
                slidesPerView: slidesLargeMobile
            },
            300: {
                // 300-399 1
                slidesPerView: slidesMobile
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: dragSize
        }
    });
});


$('.swiper_cont').each(function(index) {
    var $this = $(this);
    var sliderId = $this.data('slider-id');

    $this.addClass('swiper-slider-' + sliderId);

    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 300;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 2.5;
    var slidesSmallDesktop = $this.data('slides-small-desktop') ? $this.data('slides-small-desktop') : 1.5;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 2.5;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 1.5;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 20;

    var swiper = new Swiper('.swiper-slider-' + sliderId, {
        direction: 'horizontal',
        loop: loop,
        freeMode: freeMode,
        spaceBetween: spaceBetween,
        breakpoints: {
            1400: {
                slidesPerView: slidesDesktop
            },
            1080:{
                slidesPerView: slidesSmallDesktop
            },
            768: {
                slidesPerView: slidesTablet
            },
            300: {
                slidesPerView: slidesMobile
            }
        },
        pagination: {
            el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
return `<span class="outer-dot swiper-pagination-bullet"><span class="inner-dot"></span></span>`;
},
                   
                   }

    });
});

// product card show and hide

document.getElementById('hide_button').addEventListener('click', function() {
    // Hide the button
    this.classList.add('hidden');
    
    // Show the div
    document.getElementById('qty_button').classList.remove('hidden');
    document.getElementById('qty_button').classList.add('quantity');
});

function hide_button(product)
{    
         var allProductCards = document.querySelectorAll('.product_cta');
         allProductCards.forEach(function(card) {
            card.classList.remove('hide');
        });

         var productcard=document.getElementById(product);
          productcard.classList.add("hide");
          console.log("working")

}

// product detail page
$('.product_gallery').each(function(index) {
    var $this = $(this);
    var sliderId = $this.data('slider-id');

    $this.addClass('swiper-slider-' + sliderId);

    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : false;
    
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 15;

    var swiper = new Swiper('.swiper-slider-' + sliderId, {
        direction: 'horizontal',
        loop: loop,
        freeMode: freeMode,
        spaceBetween: spaceBetween,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
});




//   quantity button
$(document).ready(function() {
    const $quantityContainer = $(".quantity");
    const $minusBtn = $quantityContainer.find(".minus");
    const $plusBtn = $quantityContainer.find(".plus");
    const $inputBox = $quantityContainer.find(".input-box");

    updateButtonStates();

    $quantityContainer.on("click", ".minus, .plus", handleButtonClick);
    $inputBox.on("input", handleQuantityChange);

    function updateButtonStates() {
        const value = parseInt($inputBox.val());
        $minusBtn.prop("disabled", value <= 1);
        $plusBtn.prop("disabled", value >= parseInt($inputBox.attr("max")));
    }

    function handleButtonClick(event) {
        if ($(event.target).hasClass("minus")) {
            adjustValue(-1);
        } else if ($(event.target).hasClass("plus")) {
            adjustValue(1);
        }
    }

    function adjustValue(delta) {
        let value = parseInt($inputBox.val());
        value = isNaN(value) ? 1 : value + delta;
        value = Math.max(1, Math.min(value, parseInt($inputBox.attr("max"))));
        $inputBox.val(value);
        updateButtonStates();
        handleQuantityChange();
    }

    function handleQuantityChange() {
        let value = parseInt($inputBox.val());
        value = isNaN(value) ? 1 : value;

        // Execute your code here based on the updated quantity value
        console.log("Quantity changed:", value);
    }
});





  


// Footer Accordioin
jQuery(document).ready(function () {
    jQuery
        ('.footer_block .footer_title').click(function () {

            jQuery('.footer_block .footer_list').slideUp();
            jQuery('.footer_block .footer_title').removeClass("active_footer");
            var thisElemUL = jQuery(this).parent().find('.footer_list');
            if (jQuery(thisElemUL).is(':hidden')) { jQuery(this).addClass("active_footer"); jQuery(thisElemUL).slideDown() };
        });
});