import UserDetails from '@/components/users/UserDetails/UserDetails';

export interface PageProps {
	params: { id: string };
}
export default async function Page({ params }: PageProps) {
	return <UserDetails id={params.id} />;
}
