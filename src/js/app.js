import $ from 'jquery'
import 'slick-carousel'
import mixitup from 'mixitup'
import { Fancybox } from '../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js'

window.jQuery = window.$ = $

import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper, { Autoplay, Navigation, Pagination } from 'swiper'

const swiper = new Swiper()

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
		marquee: '/ БГУКИ // БГМУ // БНТУ // БГЭУ // БГУИР // БГУ'
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
