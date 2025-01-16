'use client';

import Loader from '@/components/common/Loader/Loader';
import UserList from '@/components/users/UserList/UserList';
import { fetchUsers } from '@/lib/api';
import { User } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
	const {
		data: users,
		isLoading,
		error,
	} = useQuery<User[]>({ queryKey: ['users'], queryFn: fetchUsers });

	if (isLoading) return <Loader />;
	if (error instanceof Error) return <p>Error: {error.message}</p>;

	return <UserList users={users || []} />;
}
