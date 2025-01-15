import Link from 'next/link.js';

const NotFound = () => {
	return (
		<div>
			<p>User could not found</p>
			<Link href='/users'>Back to all users</Link>
		</div>
	);
};

export default NotFound;
