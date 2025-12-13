/**
 * Components
 */
import PostCard from './post-card'

/**
 * Types
 */
import type { IPost } from '@/app/_type'

const PostList = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className='flex flex-col gap-2'>
      {
        posts?.map((post, index) => (
          <PostCard {...post} priority={index === 1} key={post.id} />
        ))
      }
    </div>
  )
}

export default PostList