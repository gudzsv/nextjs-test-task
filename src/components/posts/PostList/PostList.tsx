import { Post } from '@/types/post.js';
import { User } from '@/types/user.js';
import PostItem from '../PostItem/PostItem';
import styles from './PostList.module.scss';

interface Props {
	posts: Post[];
	users: User[];
}

export default function PostList({ posts, users }: Props) {
	return (
		<section className={styles.postList}>
			<h1>User Posts</h1>
			<ul>
				{posts.map((post) => {
					const user = users.find((user) => user.id === post.userId);
					return (
						<li key={post.id}>
							<PostItem post={post} user={user} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
