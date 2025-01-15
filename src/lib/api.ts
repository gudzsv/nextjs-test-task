import { User } from '../types/user.js';

const BASE_URL = 'https://jsonplaceholder.org';

const buildUrl = (...path: string[]): string => {
	const cleanPath = path.filter(Boolean).join('/');
	return `${BASE_URL}/${cleanPath}`;
};
const sendRequest = async <T>(url: string, init?: RequestInit): Promise<T> => {
	try {
		const res = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			...init,
		});

		if (!res.ok) {
			const errorText = await res.text();
			throw new Error(errorText || 'Unknown error occurred');
		}

		return res.json() as Promise<T>;
	} catch (error) {
		throw error;
	}
};
export const getAllUsers = (): Promise<User[]> => {
	return sendRequest<User[]>(buildUrl('users'));
};

export const getUserById = (id: number): Promise<User> => {
	return sendRequest<User>(buildUrl('users', id.toString()));
};
