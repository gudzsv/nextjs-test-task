import UserDetails from '@/components/users/UserDetails/UserDetails';

export interface PageProps {
	params: { id: string };
}
export default function Page({ params }: PageProps) {
	const { id } = params;

	if (!id) {
		return <p>Error: Missing user ID</p>;
	}

	return <UserDetails id={id} />;
}
