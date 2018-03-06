var fun = function(){
	var $this = this
	var that = $('body');
	var menuactive = false;

	var headfunc = function(){
		$('.lang').on('click',function(event) {
	    	event.stopPropagation();
	    	if(!$('.lang ul').is(':visible')){
	    		open($('.lang').find('.langselect'))
	    		return;
	    	}

	    	if($(this).hasClass('active')){
	    		$(this).removeClass('active')
	    	}else{
	    		$(this).addClass('active')
	    	}
	    });

	    var open = function(elem) {
		    if (document.createEvent) {
		        var e = document.createEvent("MouseEvents");
		        e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		        elem[0].dispatchEvent(e);
		    } else if (element.fireEvent) {
		        elem[0].fireEvent("onmousedown");
		    }
		}

	    $('.hamburger').on('click', function(event) {
	    	event.preventDefault();
	    	var nav_left = $('header ul.nav').css('left');
	    	if($('header ul.nav').is(':animated')){
	    		return;
	    	}
	    	if(nav_left == '0px'){
	    		$('header ul.nav').removeClass('_open');
	    		$(this).removeClass('active');
	    		$('header ul.nav li').removeClass('enable')
	    		// $('ul.nav li').removeClass('active')
	    		// $('ul.nav li').eq(menuactive).addClass('active');
	    	}else{
	    		$('header ul.nav').addClass('_open');
	    		$(this).addClass('active');
				// menuactive = $('ul.nav li.active').index();
	    	}
	    });
	}
	var gotopicon = false;
	$(window).scroll(function(){
    	if($(window).scrollTop() > 50){
    		if(!gotopicon){
    			$('.gotop').stop().fadeIn(200);
	    		gotopicon = true;
    		}
    	}else{
    		$('.gotop').stop().fadeOut(200);
    		gotopicon = false
    	}
    });

    $('.gotop').click(function(event) {
    	$('html,body').animate({
    		'scrollTop': 0
    	},300);
    });

    // $('ul.nav li').click(function(event) {
    // 	$(this).siblings('.active').removeClass('active');
    // 	$(this).addClass('active');
    	
    // });

    // $('ul.nav li > a').click(function(event) {
    // 	if($(this).closest('li').find('div').is(':visible')){
    // 		event.preventDefault();
    // 	}
    // });

    var changeLang = function(){
    	var lang;
    	$('.lang > ul > li').click(function(event) {
    		lang = $(this).attr('rel');
    		GoLang(lang);
    	});

    	$('.lang > select.langselect').change(function(){
			lang = $(this).val();
			GoLang(lang);
		});
    }

    var GoLang = function(lang){
    	var nowlang = lang.replace('lang_', '');
    	var burl = 'http://' + location.hostname + '/';

		$.post(burl+'main/changeLang', {lang: nowlang}, function(rt){
			var obj = $.parseJSON(rt);
			switch(obj.code){
				case '100':
					location.href = burl;
					break;
			}
		})

    }

    this.gaEvent = function(cat,act,lab) {

    	var cat = cat || '';
    	var lab = lab || '';
    	ga('send', 'event', cat, act, lab);
    }

    // this.ptop = function(){
    // 	$('.ins-main').css('padding-top',$('header').height())
    // }

    $(window).resize(function(event) {
        event.preventDefault();
    });

    var indextop = function(){
	    if($(window).scrollTop() > $('header').height()/2){
    		$('body').addClass('setoff');
    	}else{
    		$('body').removeClass('setoff');
    	}
	}

    var init = function(){
    	headfunc();
		changeLang();
		indextop();
		$('.hassub').click(function(event) {
			var w_width = $(window).width();
			if(w_width < 996){
				event.preventDefault();
				console.log('no')
				$(this).closest('li').hasClass('enable') ? $(this).closest('li').removeClass('enable') : $(this).closest('li').addClass('enable').siblings('.enable').removeClass('enable')
			}
		});

		$(window).scroll(function(event) {
			indextop();
		});
    }

    init();
}

var fubo = new fun();


//首頁
var inx_fun = function(){
	
	var indexbanner = function(){
		$('.slider-pc ul').slick({
	        lazyLoad: 'ondemand',
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        autoplay: true,
	        pauseOnHover:true,
	        autoplaySpeed:3000,
	        speed:800,
	        Swiping:true,
	        prevArrow: $(".slider-pc #banner_prev"),
	  		nextArrow: $(".slider-pc #banner_next")
	    });
	    $('.slider-mo ul').slick({
	        lazyLoad: 'ondemand',
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        autoplay: true,
	        pauseOnHover:true,
	        autoplaySpeed:3000,
	        speed:800,
	        Swiping:true,
	        prevArrow: $(".slider-mo #banner_prev"),
	  		nextArrow: $(".slider-mo #banner_next")
	    });
	} 

	var popup = function(){
		$('.g2e-popup').fadeIn(300);
		$('.popClose').click(function(event) {
			$('.g2e-popup').fadeOut(300);
		});

	}

	var init = function(){
		$('body').preload(function(){
	        $('.loading').fadeOut(500,function(){
	        	indexbanner();
	        	// popup();
	        });
		});
	}

	init();
}