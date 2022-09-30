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
			var top = $(".thetop").offset().top;
			$('html, body').animate({
				scrollTop: top
			},3000, 'easeOutExpo');
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
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
		dots: true,
	});

	$('.js-happy-slider').slick({
		slidesToShow: 3,
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
		dots: false,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: true,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: true,
				}
			},
		]
	});

	$('.js-advantages-slider').slick({
		slidesToShow: 4,
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
		dots: false,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 3,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
			{
				breakpoint: 560,
				settings: {
					slidesToShow: 1,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
		]
	});

	$('.js-team-slider').slick({
		slidesToShow: 3,
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
		dots: false,
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
					nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
					dots: false,
				}
			},
		]
	});


	$('.js-news-slider').slick({
		slidesToShow: 1,
		prevArrow: '<div class="slick-arrow slick-arrow__prev"><i class="icomoon-arrow"></i></div>',
		nextArrow: '<div class="slick-arrow slick-arrow__next"><i class="icomoon-arrow"></i></div>',
		vertical: true,
		verticalSwiping: true,
		dots: true,
	});

	let viewportWidth = $(window).width();

	if (viewportWidth < 767) {
		$('.js-news-slider').slick('unslick');
	}

	let swiper = new Swiper(".js-ladies-slider", {
		slidesPerView: 'auto',
		spaceBetween: 0,
		centeredSlides: true,
		preventClicks:true,
		loop:true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
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
		const elements = document.querySelectorAll('.js-tracker');
		// console.log(el);
		let date = new Date();
		let hh = date.getHours();
		let mm = date.getMinutes();
		let ss = date.getSeconds();

		hh = hh < 10 ? `0${hh}` : hh;
		mm = mm < 10 ? `0${mm}` : mm;

		let time = `${hh}<span class="blink">:</span>${mm}`;

		for (let elem of elements) {
			elem.innerHTML = time;
		}
	};

	const readMoreOpen = () => {
		$('.js-more-open').on('click', function () {
			$(this).closest('.our-happy__blockquote').children('.text-holder').toggleClass( "open");
		})
	}

	const loginOpener = () => {
		$('.js-login-opener').on('click', function () {
			$('.js-login-opener').toggleClass('active');
			$('.js-user-info-list').toggleClass('active');
		});

		$(document).mouseup(function (e) {
			if ($('.js-user-info-list').has(e.target).length === 0){
				$('.js-login-opener').removeClass('active');
				$('.js-user-info-list').removeClass('active');
			}
		});
	}

	const datePicker = () => {
		$( ".date-picker" ).datepicker({
			changeMonth: true,
			changeYear: true,
		});
	}

	const mask = () => {
		$(".phone").inputmask({"mask": "(999) 999-99-99"});
	}

	const customSelect = () => {
		$( ".custom-select" ).selectmenu();
	}

	const addSocial = () => {
		const addBtn = document.querySelector('.js-add-btn');
		const addingBlocks = document.querySelector('.js-adding-socials');
		const addBlock = `
				<div class="socials-holder">
					<div class="input-holder">
						<strong class="input-label">Your social networks <i class="icomoon-privacy"><div class="privacy-text">Confidential field. Accessible only to the Matchmaker</div></i></strong>
						<div class="social-block">
							<select name="social" class="custom-select social-select">
								<option selected="selected">Choose</option>
								<option>Facebook</option>
								<option>Twitter</option>
								<option>Instagram</option>
							</select>
						</div>
					</div>
					<div class="input-holder">
						<input type="text" placeholder="Your nickname/login ">
					</div>
				</div>`

		if (addBtn) {
			addBtn.addEventListener('click', () => {
				addingBlocks.insertAdjacentHTML('beforeend', addBlock);
				customSelect();
			})
		}
	}

	const addChildren = () => {
		const addBtn = document.querySelector('.js-add-child-btn');
		const addingBlocks = document.querySelector('.js-adding-children');
		let count = 1;

		if (addBtn) {
			addBtn.addEventListener('click', () => {
				console.log(count);
				count += 1;
				console.log(count);
				const addBlock = `
				<div class="status-block">
\t\t\t\t\t\t\t\t\t\t<div class="input-holder">
\t\t\t\t\t\t\t\t\t\t\t<label class="input-label" for="children-date-of-birth-${count}">Date of birth</label>
\t\t\t\t\t\t\t\t\t\t\t<input id="children-date-of-birth-${count}" type="text" class="date-picker" placeholder="mm/dd/yyyy ">
\t\t\t\t\t\t\t\t\t\t\t<i class="icomoon-calendar"></i>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t\t<div class="input-holder input-holder_gender">
\t\t\t\t\t\t\t\t\t\t\t<strong class="input-label">Gender</strong>
\t\t\t\t\t\t\t\t\t\t\t<ul class="status-list">
\t\t\t\t\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="male-${count}" name="children-status-${count}" value="Male">
\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="male-${count}">Male</label>
\t\t\t\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="radio" id="female-${count}" name="children-status-${count}" value="Female">
\t\t\t\t\t\t\t\t\t\t\t\t\t<label for="female-${count}">Female</label>
\t\t\t\t\t\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t\t</div>`
				addingBlocks.insertAdjacentHTML('beforeend', addBlock);
				datePicker();
			})
		}
	}

	const selectGifts = () => {
		$( ".js-ladies-select" ).selectmenu({
			change: function( event, ui ) {
				$(this).closest('.select-holder').children('.btn').removeAttr("disabled");
			}
		});
	}

	const quantity = () => {

		$('.plus').on('click', function () {
			let input = $(this).closest('.quantity-holder').children('.quantity');
			let price = $(this).closest('tr').children('td').children('.js-price');
			let priceAll = $(this).closest('tr').children('td').children('.js-price-all');
			let priceNumb = parseInt(price.text());
			let priceAllNumb = parseInt(priceAll.text());
			let inputValue = input.val();
			let minValue =  parseInt(input.attr('min'));
			let maxValue =  parseInt(input.attr('max'));

			if (inputValue < maxValue) {
				input.val(parseInt(inputValue) + 1);
				console.log(1234);
				priceAll.text((priceAllNumb + priceNumb));
			}
		});

		$('.minus').on('click', function () {
			let input = $(this).closest('.quantity-holder').children('.quantity');
			let price = $(this).closest('tr').children('td').children('.js-price');
			let priceAll = $(this).closest('tr').children('td').children('.js-price-all');
			let priceNumb = parseInt(price.text());
			let priceAllNumb = parseInt(priceAll.text());
			let inputValue = input.val();
			let minValue =  parseInt(input.attr('min'));
			let maxValue =  parseInt(input.attr('max'));

			if (inputValue >= minValue) {
				input.val(parseInt(inputValue) - 1);
				priceAll.text((priceAllNumb - priceNumb));
			}
		});
	}

	readMoreOpen();
	currentTime();
	setInterval(currentTime, 1000);
	loginOpener();
	datePicker();
	mask();
	customSelect();
	addSocial();
	addChildren();
	selectGifts();
	quantity();

	AOS.init({
		duration: 1000,
	});

	document.addEventListener('aos:in', ({ detail }) => {
		console.log('animated in', detail);
	});

	document.addEventListener('aos:out', ({ detail }) => {
		console.log('animated out', detail);
	});
})
