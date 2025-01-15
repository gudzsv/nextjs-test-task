import UserList from '@/components/users/UserList/UserList';
import { getAllUsers } from '../../lib/api';

export default async function page() {
	const users = await getAllUsers();

	return <UserList users={users} />;
}
