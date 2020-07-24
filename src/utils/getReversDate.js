const getReversDate = string => {
	return string.split('-').reverse().join('.');
};

export default getReversDate;
