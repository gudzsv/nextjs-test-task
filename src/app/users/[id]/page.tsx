import UserDetails from '@/components/users/UserDetails/UserDetails';
import { Metadata } from 'next';

export interface PageProps {
	params: { id: string };
}

export const generateMetadata = async ({
	params,
}: PageProps): Promise<Metadata> => {
	return {
		title: `User ${params?.id}`,
		description: `This is the profile page for user with ID ${params.id}`,
	};
};
export default async function Page({ params }: PageProps) {
	if (!params?.id) {
		return <p>Error: Missing user ID</p>;
	}

	return <UserDetails id={params.id} />;
}
