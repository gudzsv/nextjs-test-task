import UserDetails from '@/components/users/UserDetails/UserDetails';

export interface PageProps {
	params: { id: string };
}
export default async function Page({ params }: PageProps) {
	const { id } = await params;

	if (!id) {
		return <p>Error: Missing user ID</p>;
	}

	return <UserDetails id={id} />;
}
