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
    <Link href={`/posts/${postId}`} className="p-1 py-5">
        <h1 className="text-xl text-app-500">{title}</h1>
        {
          photoUrl &&
            <div className="aspect-video w-full rounded-2xl relative my-2">
              <Image
                src={photoUrl}
                alt="post"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-md"
                unoptimized={photoUrl.includes("localhost")}
                priority={priority}
              />
            </div>
        }
        <p className="line-clamp-3">{content}</p>
    </Link>
  )
}

export default Content