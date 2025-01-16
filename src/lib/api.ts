import { Post } from '@/types/post.js';
import { User } from '../types/user';

const BASE_URL = 'https://jsonplaceholder.org';

const buildUrl = (...path: (string | undefined)[]): string => {
	const cleanPath = path.filter(Boolean).join('/');
	return `${BASE_URL}/${cleanPath}`;
};

type RequestError = Error & { response?: string };

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

		return res.json() as T;
	} catch (error) {
		if (error instanceof Error) {
			const err = error as RequestError;
			err.response = err.message;
			throw err;
		}

		throw new Error('Unknown error occurred');
	}
};

export const fetchUsers = (): Promise<User[]> => {
	return sendRequest<User[]>(buildUrl('users'));
};

export const fetchUserById = (id: number): Promise<User> => {
	return sendRequest<User>(buildUrl('users', id.toString()));
};

export const fetchPosts = (): Promise<Post[]> => {
	return sendRequest<Post[]>(buildUrl('posts'));
};
