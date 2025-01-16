import Link from 'next/link.js';

const NotFound = () => {
	return (
		<div>
			<p>Page Not Found</p>
			<Link href='/'>Back to home page</Link>
		</div>
	);
};

export default NotFound;
