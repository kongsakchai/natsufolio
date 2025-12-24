import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const showFormattedDate = (date: string | dayjs.Dayjs) => {
	return dayjs(date, 'DD-MM-YYYY').format('DD MMM YYYY');
};

export const convertToDate = (date: string) => {
	return dayjs(date, 'DD-MM-YYYY');
};

export const clamp = (value: number, min: number, max: number) => {
	return Math.min(Math.max(value, min), max);
};

export const twoDigit = (n: number) => {
	if (!n || n == 0) return '0';
	const str = n.toString();
	return str.length < 2 ? `0${str}` : str;
};
