import UserList from '@/components/users/UserList/UserList';
import { fetchUsers } from '@/lib/api';
import { User } from '@/types/user';

export default async function Page() {
	const users: User[] = await fetchUsers();

	return <UserList users={users} />;
}
