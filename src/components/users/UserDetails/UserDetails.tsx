'use client';
import { fetchUserById } from '@/lib/api';
import { User } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

interface UserDetailsProps {
	params: {
		id: string;
	};
}

export default function UserDetails({ id }) {
	const userId = parseInt(id, 10);
	console.log('params.id: ', id);

	const {
		data: user,
		isLoading,
		error,
	} = useQuery<User>({
		queryKey: ['users'],
		queryFn: () => fetchUserById(userId),
	});

	if (isLoading) return <p>Loading...</p>;
	if (error instanceof Error) return <p>Error: {error.message}</p>;
	if (user) {
		return (
			<div>
				<h2>
					{user.firstname} {user.lastname}
				</h2>
				<p>Email: {user.email}</p>
				<p>Phone: {user.phone}</p>
				<p>Address: {user.address?.city}</p>
				<p>Company: {user.company?.name}</p>
			</div>
		);
	}
	return null;
}
