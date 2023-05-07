import $ from 'jquery'
import 'slick-carousel'
import mixitup from 'mixitup'
import { Fancybox } from '../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js'

window.jQuery = window.$ = $

import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, { Autoplay, Navigation, Pagination } from 'swiper'

const swiper = new Swiper()

//translate

var arrLang = {
	en: {
		collection: 'Collection',
		gallery: 'Gallery',
		diploma: 'Diploma',
		title: 'Portraits of Belarusian Universities',
		subtitle: 'NFT Collection',
		marquee: '// BGUKI // BGMU // BNTU // BGEU // BSUIR // BSU'
	},
	by: {
		collection: 'Калекцыя',
		gallery: 'Галерыя',
		diploma: 'Дыплом',
		title: 'Партрэты Беларускіх Універсітэтаў',
		subtitle: 'Калекцыя NFT',
		marquee: '// БДУКІ // БДМУ // БНТУ // БДЭУ // БДУІР // БДУ'
	},
	ru: {
		collection: 'Коллекция',
		gallery: 'Галерия',
		diploma: 'Диплом',
		title: 'Портреты Белорусских Университетов',
		subtitle: 'Коллекция NFT',
		marquee: '// БГУКИ // БГМУ // БНТУ // БГЭУ // БГУИР // БГУ'
	}
}

$(function () {
	$('.translate').click(function () {
		var lang = $(this).attr('id')

		$('.lang').each(function (index, item) {
			$(this).text(arrLang[lang][$(this).attr('key')])
		})
	})
})

let translate = document.querySelectorAll('.translate') // Возвращает список элементов
let lastClicked = translate[0] // Первый элемент из списка (счет начинается с нуля)

for (let i = 0; i < translate.length; i++) {
	// Цикл берет и кругами выполняет код. На каждом круге, i является конкретным числом.
	// Добавляется событие 'клик' на test[0], потом test[1], test[2]...
	translate[i].addEventListener('click', function () {
		lastClicked.classList.remove('translate--active')
		this.classList.add('translate--active')
		// Убрали класс с предыдущего кликнутого элемента, добавили на текущий
		lastClicked = this
		// Обновили значение переменной - теперь она ссылается на текущий элемент.
		// Чтобы на следующем клике, убрать класс уже с этого.
	})
}

//slider

$('.gallery__slider').slick({
	dots: true,
	arrows: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
				arrows: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		}
	]
})

//header-bg

$(window).scroll(function (e) {
	var height = $(this).scrollTop()
	$('.header')[height >= 570 ? 'addClass' : 'removeClass']('header-nav--active')
})

//header-scroll

$("a[rel='m_PageScroll2id']").mPageScroll2id({
	scrollEasing: 'easeOutQuint',
	scrollSpeed: 900
})
