// Реверс даты в европейский формат (01-01-2020)

const getReversDate = string => {
	return string.split('-').reverse().join('.');
};

export default getReversDate;
