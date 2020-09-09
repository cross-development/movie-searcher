//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import Slider from 'react-slick';
//Utils
import { settings } from 'utils/getSliderSettings';
//Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//TODO: добавить маржины между айтемами слайдера

const PersonsSlider = ({ children }) => <Slider {...settings}>{children}</Slider>;

PersonsSlider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PersonsSlider;
