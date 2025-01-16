import { Post } from '@/types/post.js';
import { User } from '@/types/user.js';
import styles from './PostItem.module.scss';

interface Props {
	post: Post;
	user?: User;
}

const PostItem = ({ post, user }: Props) => {
	return (
		<div className={styles.post}>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
			{user ? (
				<div className='author'>
					<p>
						<strong>Author: </strong>
						{user.firstname} {user.lastname}
					</p>
					<p>
						<strong>Email: </strong>
						{user.email}
					</p>
				</div>
			) : (
				<p>Author: Unknown</p>
			)}
		</div>
	);
};

export default PostItem;
