// Экспорт настроек для слайдера популярных акторов

export const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 14,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	style: { maxWidth: 'calc(100vw - 100px)', margin: '20px auto' },
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
	],
};
