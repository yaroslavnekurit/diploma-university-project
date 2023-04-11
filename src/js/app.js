import $ from 'jquery'
import 'slick-carousel'
import mixitup from 'mixitup'
import { Fancybox } from '../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js'

window.jQuery = window.$ = $

import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, { Autoplay, Navigation, Pagination } from 'swiper'

const swiper = new Swiper()

$(function () {
	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close')
	})
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close')
	})

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true
	})

	$('.contact-slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false
	})

	$('.article-slider__box').slick({
		arrows: true,
		prevArrow:
			"<button type='button' class='article-slider__arrow article-slider__arrowback'></button>",
		nextArrow:
			"<button type='button' class='article-slider__arrow article-slider__arrownext'></button>"
	})

	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	})
})

var menuList = $('.menu__list-link')

menuList.on('click', function () {
	menuList.removeClass('menu__list-link--active')
	$(this).addClass('menu__list-link--active')
})

Fancybox.bind('[data-fancybox]', {
	src: 'https://www.youtube.com/watch?v=Nxg6UfofZX0&t=24508s',
	type: 'video',
	ratio: 16 / 10,
	width: 640,
	height: 360
})
