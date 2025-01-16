import PostList from '@/components/posts/PostList/PostList';
import { fetchPosts, fetchUsers } from '@/lib/api';
import { Post, User } from '@/types';

export default async function page() {
	try {
		const posts: Post[] = await fetchPosts();
		const users: User[] = await fetchUsers();

		return <PostList posts={posts} users={users} />;
	} catch (error: unknown) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		return <div>{`Error loading data, Error: ${errorMessage}`}</div>;
	}
}
