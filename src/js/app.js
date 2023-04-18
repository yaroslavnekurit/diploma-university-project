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
		diploma: 'Diploma'
	},
	by: {
		collection: 'Калекцыя',
		gallery: 'Галерыя',
		diploma: 'Дыплом'
	},
	ru: {
		collection: 'Коллекция',
		gallery: 'Галерия',
		diploma: 'Диплом'
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
