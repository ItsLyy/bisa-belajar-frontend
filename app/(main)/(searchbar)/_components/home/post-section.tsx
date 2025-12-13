/**
 * Components
 */
import { getAllPosts } from "@/app/_datas/posts/get-all-posts";
import PostList from "../post-list"

const PostSection = async () => {
    const posts = await getAllPosts();
    
    return (
        <section className="pb-16">
            <PostList posts={posts?.data} />
        </section>
    )
}

export default PostSection