import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const showFormattedDate = (date: string | dayjs.Dayjs) => {
	return dayjs(date, 'DD-MM-YYYY').format('MMM DD, YYYY');
};

export const convertToDate = (date: string) => {
	return dayjs(date, 'DD-MM-YYYY');
};
