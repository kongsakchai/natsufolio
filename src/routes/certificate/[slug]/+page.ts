import type { CertificateType } from '$lib/types/index.js';
import { error } from '@sveltejs/kit';

import { certificates } from '$lib/data';

export const load = async ({ params }) => {
	console.log(params.slug);
	const filter = certificates.find((certs) => certs.type?.includes(params.slug as CertificateType));
	if (!filter) {
		return error(404);
	}

	return { certificates: filter };
};
