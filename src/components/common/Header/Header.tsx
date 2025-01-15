import Link from 'next/link';
import styles from './Header.module.scss'; // Імпортуємо модуль стилів

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href='/users'>Users</Link>
					</li>
					<li className={styles.navItem}>
						<Link href='/posts'>Posts</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
