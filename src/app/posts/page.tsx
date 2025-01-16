import PostList from '@/components/posts/PostList/PostList';
import { fetchPosts, fetchUsers } from '@/lib/api';

export default async function page() {
	const posts = await fetchPosts();
	const users = await fetchUsers();

	return <PostList posts={posts} users={users} />;
}
