'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

export default function Header() {
	const pathname = usePathname();
	console.log('pathname: ', pathname);

	const getLinkClass = (path: string) => {
		console.log('pathname: ', pathname);
		return pathname === path ? styles.active : '';
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href={'/'} className={styles.logo}>
					<span>{' TEST-TASK '}</span>
					<span className={styles.decoration}>{'(NextJS)'}</span>
				</Link>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href='/users' className={getLinkClass('/users')}>
							Users
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/posts' className={getLinkClass('/posts')}>
							Posts
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
