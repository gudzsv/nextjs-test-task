import { ReactNode } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	);
}
