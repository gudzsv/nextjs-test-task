'use client';

import Button from '@/components/common/Button/Button';
import Link from 'next/link.js';

export interface ErrorComponentProps {
	error: Error;
}

export default function ErrorPage({ error }: ErrorComponentProps) {
	return (
		<div style={{ padding: '20px', textAlign: 'center' }}>
			<h1>Oops! Something went wrong</h1>
			<p>{error.message}</p>
			<Button>
				<Link href={'/users'}>Go to users</Link>
			</Button>
		</div>
	);
}
