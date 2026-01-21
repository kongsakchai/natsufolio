import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import type { Component, ComponentProps } from 'svelte';

import type { Content } from '$lib/types';

dayjs.extend(customParseFormat);

export const showFormattedDate = (date: string | dayjs.Dayjs) => {
	const resp = dayjs(date, 'DD-MM-YYYY').format('DD MMM YYYY');
	return resp.replaceAll('Invalid Date', date.toString().replaceAll('-', ' '));
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const defineContent = <T extends Component<any>>(
	component: T,
	params: ComponentProps<T>
): Content<T> => ({
	Component: component,
	params: params
});
