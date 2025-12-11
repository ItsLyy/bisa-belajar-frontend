"server only"

/**
 * Custom Modules
 */
import data from "../posts.json"

export async function getAllPosts() {
    const posts = data.posts;
    return posts;
}
