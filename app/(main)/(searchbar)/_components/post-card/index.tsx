/**
 * Components
 */
import Card from '@/app/_components/ui/card'
import Header from './header'
import Content from './content'
import Footer from './footer'

/**
 * Types
 */
import type { IUser, IPost } from '@/app/_type'

type TPostData = Pick<IPost, "id" | "title" | "content" | "created_at" | "photo_url">
type TUserData = Pick<IUser, "id" | "name" | "avatar_path" | "skills">

interface IPostCardProps extends TPostData {
  user: TUserData;
  priority?: boolean;
}

const PostCard = ({ id, title, content, created_at, photo_url, user, priority = false }: IPostCardProps) => {
  return (
      <Card className='bg-transparent border-2 border-app-150 p-4'>
          <Header id={user.id} name={user.name} skills={user.skills?.map(skill => skill.name)} />
          <Content title={title} postId={id} content={content} photoUrl={photo_url} priority={priority} />
          <Footer threads={20} date={created_at} />
      </Card>
  )
}

export default PostCard