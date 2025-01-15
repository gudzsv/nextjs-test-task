import { User } from '@/types/user';
import React from 'react';
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.scss';

interface UserListProps {
	users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
	return (
		<ul className={styles.list}>
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</ul>
	);
};

export default UserList;
