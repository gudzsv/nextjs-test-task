import UserDetails from '@/components/users/UserDetails/UserDetails';
import { Metadata } from 'next';

export interface PageProps {
	params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
	params,
}: PageProps): Promise<Metadata> => {
	const resolvedParams = await params;
	return {
		title: `User ${resolvedParams?.id}`,
		description: `This is the profile page for user with ID ${resolvedParams.id}`,
	};
};
export default async function Page({ params }: PageProps) {
	const resolvedParams = await params;
	if (!resolvedParams?.id) {
		return <p>Error: Missing user ID</p>;
	}

	return <UserDetails id={resolvedParams?.id} />;
}
