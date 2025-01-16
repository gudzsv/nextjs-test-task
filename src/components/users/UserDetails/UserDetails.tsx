import { fetchUserById } from '@/lib/api';

// interface UserDetailsProps {
// 	id: string;
// }

// export default async function UserDetails({ id }: UserDetailsProps) {
// 	const userId = parseInt(id, 10);
// 	console.log('params.id: ', id);
// 	const user = await fetchUserById(userId);
// 	console.log('user: ', user);

// 	if (user === null || user === undefined) {
// 		return <p>User Not Found</p>;
// 	}
// 	return (
// 		<div>
// 			<h2>
// 				{user.firstname} {user.lastname}
// 			</h2>
// 			<p>Email: {user.email}</p>
// 			<p>Phone: {user.phone}</p>
// 			<p>Address: {user.address?.city}</p>
// 			<p>Company: {user.company?.name}</p>
// 		</div>
// 	);
// }

import styles from './UserDetails.module.scss';

interface UserDetailProps {
	id: string;
}

export default async function UserDetails({ id }: UserDetailProps) {
	const userId = parseInt(id, 10);
	console.log('params.id: ', id);
	const user = await fetchUserById(userId);
	console.log('user: ', user);

	return (
		<article className={styles.userDetail}>
			<header className={styles.header}>
				<h1 className={styles.name}>{`${user.firstname} ${user.lastname}`}</h1>
				<p className={styles.username}>Username: {user.login.username}</p>
			</header>

			<section className={styles.userInfo}>
				<div className={styles.grid}>
					<div className={styles.label}>Email:</div>
					<div className={styles.value}>{user.email}</div>

					<div className={styles.label}>Birth Date:</div>
					<div className={styles.value}>{user.birthDate}</div>

					<div className={styles.label}>Address:</div>
					<div className={styles.value}>
						{user.address.street}, {user.address.suite}, {user.address.city},{' '}
						{user.address.zipcode}
					</div>

					<div className={styles.label}>Phone:</div>
					<div className={styles.value}>{user.phone}</div>

					<div className={styles.label}>Website:</div>
					<div className={styles.value}>
						<a
							href={`https://${user.website}`}
							className={styles.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							{user.website}
						</a>
					</div>

					<div className={styles.label}>Company Name:</div>
					<div className={styles.value}>{user.company.name}</div>

					<div className={styles.label}>Company Catchphrase:</div>
					<div className={styles.value}>{user.company.catchPhrase}</div>

					<div className={styles.label}>Company Business:</div>
					<div className={styles.value}>{user.company.bs}</div>

					<div className={styles.label}>UUID:</div>
					<div className={styles.value}>{user.login.uuid}</div>
				</div>
			</section>
		</article>
	);
}
