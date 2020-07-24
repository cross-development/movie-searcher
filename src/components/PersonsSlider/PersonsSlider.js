//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import Slider from 'react-slick';
//Styles
import styles from './PersonsSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 14,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	className: `${styles.actorsList}`,
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
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

const PersonsSlider = ({ children }) => {
	return <Slider {...settings}>{children}</Slider>;
};

PersonsSlider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PersonsSlider;
