import UserList from '@/components/users/UserList/UserList';
import { fetchUsers } from '@/lib/api';
import { User } from '@/types/user';

import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
	return {
		title: `Users Page`,
		description: `Users Page`,
	};
};

export default async function Page() {
	const users: User[] = await fetchUsers();

	return <UserList users={users} />;
}
