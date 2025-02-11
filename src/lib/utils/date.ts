import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export const showFormattedDate = (date: string) => {
	return dayjs(date, 'DD-MM-YYYY').format('MMM DD, YYYY');
};
