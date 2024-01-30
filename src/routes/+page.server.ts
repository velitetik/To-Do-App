import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = (async () => {
	const response = await prisma.task.findMany({});

	return { tasks: response };
}) satisfies PageServerLoad;

export const actions = {
	create: async ({ request }) => {
		const { title } = Object.fromEntries(await request.formData()) as {
			title: string;
		};

		await prisma.task.create({
			data: {
				title: title,
				status: false
			}
		});

		throw redirect(303, '/');
	},

	delete: async ({ url }) => {
		const id = url.searchParams.get('id');

		await prisma.task.delete({
			where: { id: Number(id) }
		});

		throw redirect(303, '/');
	},

	update: async ({ request }) => {
		const enteredData = await request.formData();

		const id = enteredData.get('id')?.toString();
		const title = enteredData.get('title')?.toString();
		const status = enteredData.get('status')?.toString();

		if (enteredData) {
			try {
				await prisma.task.update({
					where: {
						id: Number(id)
					},
					data: {
						title: title,
						status: status === 'true' ? false : true
					}
				});
			} catch (err) {
				console.error(err);
			}
		}
		throw redirect(303, '/');
	}
} satisfies Actions;
