(function($) { "use strict";

	//Home Sections fit screen	
				
		/*global $:false */
		$(function(){"use strict";
			$('.home').css({'height':($(window).height())+'px'});
			$(window).resize(function(){
			$('.home').css({'height':($(window).height())+'px'});
			});
		});
	
	//Page Scroll
	
	$(document).ready(function(){"use strict";
		$(".scroll").click(function(event){

			event.preventDefault();

			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top;

			$('html, body').animate({scrollTop:target_top}, 1000);
		});

	
	//Navigation
	

		var MqL = 1170;
		moveNavigation();
		$(window).on('resize', function(){
			(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
		});

		$('.cd-nav-trigger').on('click', function(event){
			event.preventDefault();
			if( $('.cd-main-content').hasClass('nav-is-visible') ) {
				closeNav();
				$('.cd-overlay').removeClass('is-visible');
			} else {
				$(this).addClass('nav-is-visible');
				$('.cd-primary-nav').addClass('nav-is-visible');
				$('.cd-main-header').addClass('nav-is-visible');
				$('.cd-main-content').addClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					$('body').addClass('overflow-hidden');
				});
				toggleSearch('close');
				$('.cd-overlay').addClass('is-visible');
			}
		});

		$('.cd-search-trigger').on('click', function(event){
			event.preventDefault();
			toggleSearch();
			closeNav();
		});

		$('.cd-overlay').on('swiperight', function(){
			if($('.cd-primary-nav').hasClass('nav-is-visible')) {
				closeNav();
				$('.cd-overlay').removeClass('is-visible');
			}
		});
		$('.nav-on-left .cd-overlay').on('swipeleft', function(){
			if($('.cd-primary-nav').hasClass('nav-is-visible')) {
				closeNav();
				$('.cd-overlay').removeClass('is-visible');
			}
		});
		$('.cd-overlay').on('click', function(){
			closeNav();
			toggleSearch('close')
			$('.cd-overlay').removeClass('is-visible');
		});


		$('.cd-primary-nav').children('.has-children').children('a').on('click', function(event){
			event.preventDefault();
		});
		$('.has-children').children('a').on('click', function(event){
			if( !checkWindowWidth() ) event.preventDefault();
			var selected = $(this);
			if( selected.next('ul').hasClass('is-hidden') ) {
				selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
				selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
				$('.cd-overlay').addClass('is-visible');
			} else {
				selected.removeClass('selected').next('ul').addClass('is-hidden').end().parent('.has-children').parent('ul').removeClass('moves-out');
				$('.cd-overlay').removeClass('is-visible');
			}
			toggleSearch('close');
		});

		$('.go-back').on('click', function(){
			$(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
		});

		function closeNav() {
			$('.cd-nav-trigger').removeClass('nav-is-visible');
			$('.cd-main-header').removeClass('nav-is-visible');
			$('.cd-primary-nav').removeClass('nav-is-visible');
			$('.has-children ul').addClass('is-hidden');
			$('.has-children a').removeClass('selected');
			$('.moves-out').removeClass('moves-out');
			$('.cd-main-content').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
		}

		function toggleSearch(type) {
			if(type=="close") {
				$('.cd-search').removeClass('is-visible');
				$('.cd-search-trigger').removeClass('search-is-visible');
			} else {
				$('.cd-search').toggleClass('is-visible');
				$('.cd-search-trigger').toggleClass('search-is-visible');
				if($(window).width() > MqL && $('.cd-search').hasClass('is-visible')) $('.cd-search').find('input[type="search"]').focus();
				($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible') ;
			}
		}

		function checkWindowWidth() {
			var e = window, 
				a = 'inner';
			if (!('innerWidth' in window )) {
				a = 'client';
				e = document.documentElement || document.body;
			}
			if ( e[ a+'Width' ] >= MqL ) {
				return true;
			} else {
				return false;
			}
		}

		function moveNavigation(){
			var navigation = $('.cd-nav');
			var desktop = checkWindowWidth();
			if ( desktop ) {
				navigation.detach();
				navigation.insertBefore('.cd-header-buttons');
			} else {
				navigation.detach();
				navigation.insertAfter('.cd-main-content');
			}
		}



	
	//Parallax
	

			$('.parallax-5').parallax("50%", 0.4);
			$('.parallax-2').parallax("50%", 0.4);
			$('.parallax-1').parallax("50%", 0.4);
			$('.parallax-3').parallax("50%", 0.4);
	});
  





	
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	