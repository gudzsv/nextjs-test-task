import { User } from '@/types/user';
import Link from 'next/link.js';
import styles from './UserCard.module.scss';

interface UserCardProps {
	user: User;
}

function UserCard({ user }: UserCardProps) {
	return (
		<li className={styles.card}>
			<Link href={`/users/${user.id}`}>
				<h3 className={styles.name}>
					{user.firstname} {user.lastname}
				</h3>
				<p className={styles.email}>{user.email}</p>
				<p className={styles.phone}>{user.phone}</p>
				<p className={styles.address}>{user.address?.city}</p>
				<p className={styles.company}>{user.company?.name}</p>
			</Link>
		</li>
	);
}

export default UserCard;
