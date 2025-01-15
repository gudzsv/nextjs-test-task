import { User } from '@/types/user';
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.scss';

interface UserListProps {
	users: User[];
}

function UserList({ users }: UserListProps) {
	return (
		<ul className={styles.list}>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</ul>
	);
}

export default UserList;
