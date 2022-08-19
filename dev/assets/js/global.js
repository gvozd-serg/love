jQuery(document).ready(function($) {

    $(".fancybox").fancybox();
    $('.nice_Select').niceSelect();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(function() {
        $(".muve-top").click(function() {
            $("html,body").animate({
                scrollTop: $(".thetop").offset().top
            }, "1000");
            return false
        })
    })

    if ($('.post-item img').length || $('.seo-block img').length) {
        $('.post-item img, .seo-block img').each(function() {
            var imgThis = $(this);
            if (!imgThis.hasClass("nofancy")) {
                if (imgThis.closest('a')) {
                    imgThis.closest('a').attr({
                        'data-fancybox': 'content-group',
                        //'href': $(this).attr('src'),
                    });
                };
            };
        });
    };

    if ($('.post-item iframe').length) {
        $('.post-item iframe').closest('p').addClass('iframe-box')
    }

    var nav = $('.language-title');
    var selection = $('.language-list');
    var select = selection.find('li');

    nav.click(function(event) {
        if (nav.hasClass('active')) {
            nav.removeClass('active');
            selection.stop().slideUp(200);
        } else {
            nav.addClass('active');
            selection.stop().slideDown(200);
        }
        event.preventDefault();
    });

    select.click(function(event) {
        select.removeClass('active');
        $(this).addClass('active');
        var $lang = $(this).text();
        nav.text($lang);
        nav.trigger('click');
     });

	let navOpener = document.querySelector('.js-nav-opener');
	let header = document.querySelector('.header');

	navOpener.addEventListener('click', () => {
		header.classList.toggle('active');
	})

	$('.js-visual-slider').slick({
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icon-arrow"></i></div>',
		dots: true,
	});

	$('.js-happy-slider').slick({
		slidesToShow: 3,
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icon-arrow"></i></div>',
		dots: true,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icon-arrow"></i></div>',
					dots: true,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icon-arrow"></i></div>',
					dots: true,
				}
			},
		]
	});

	$('.js-news-slider').slick({
		slidesToShow: 1,
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icon-arrow"></i></div>',
		vertical: true,
		verticalSwiping: true,
	});

	let viewportWidth = $(window).width();

	if (viewportWidth < 767) {
		$('.js-news-slider').slick('unslick');
	}

	var swiper = new Swiper(".js-ladies-slider", {
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
		preventClicks:true,
		loop:true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		on: {
			init: function () {
				$('.swiper-slide').addClass('changed');
			},
			slideChangeTransitionStart : function() {
				$('.swiper-slide').addClass('changing');
				$('.swiper-slide').removeClass('changed');
			},
			slideChangeTransitionEnd : function() {
				$('.swiper-slide').removeClass('changing');
				$('.swiper-slide').addClass('changed');
			}
		},
	});

	const currentTime = () => {
		const el = document.querySelector('.js-tracker');

		let date = new Date();
		let hh = date.getHours();
		let mm = date.getMinutes();
		let ss = date.getSeconds();

		hh = hh < 10 ? `0${hh}` : hh;
		mm = mm < 10 ? `0${mm}` : mm;

		let time = `${hh}:${mm}`;

		el.innerHTML = time;
	};

	currentTime();
	setInterval(currentTime, 1000);
})
