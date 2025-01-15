import { User } from '@/types/user';
import React from 'react';
import styles from './UserCard.module.scss';

interface UserCardProps {
	user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	return (
		<li className={styles.card}>
			<h3 className={styles.name}>
				{user.firstname} {user.lastname}
			</h3>
			<p className={styles.email}>{user.email}</p>
			<p className={styles.phone}>{user.phone}</p>
			<p className={styles.address}>{user.address?.city}</p>
			<p className={styles.company}>{user.company?.name}</p>
		</li>
	);
};

export default UserCard;
