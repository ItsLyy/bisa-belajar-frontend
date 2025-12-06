/**
 * Node Modules
 */
import Image from "next/image";
import Link from "next/link";

interface IContentProps {
  postId: string;
  title: string;
  content: string;
  photoUrl?: string;
  priority?: boolean;
}

const Content = ({ postId, title, content, photoUrl, priority = false }: IContentProps) => {
  return (
    <div className="p-1">
        <h1 className="text-xl text-app-500">{title}</h1>
        {
          photoUrl &&
            <Link href={`/posts/${postId}`} className="aspect-video w-full rounded-2xl relative">
              <Image
                src={photoUrl}
                alt="post"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={priority}
              />
            </Link>
        }
        <p className="line-clamp-3">{content}</p>
    </div>
  )
}

export default Content