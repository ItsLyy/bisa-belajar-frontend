/**
 * Components
 */
import { ArrowLeftIcon, ChatCircleIcon, HeartIcon } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import ThreadItem from './_components/thread-item';
import ReplyForm from './_components/reply-form';

/**
 * Utils
 */
import { getPost } from '@/app/_datas/posts/get-post';
import { formatDate } from '@/app/_utils/format-date';

/**
 * Types
 */
import type { Metadata } from 'next';

interface IPostDetailPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IPostDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const post = await getPost(id);

    return {
        title: post ? post.title : 'Post Details',
        description: post ? post.content.substring(0, 160) : 'View post details and discussions'
    };
}

export default async function PostDetailPage({ params }: IPostDetailPageProps) {
    const { id } = await params;
    const post = await getPost(id);

    if (!post) {
        return (
            <section className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center">
                    <h1 className="text-2xl text-app-500 font-bold mb-2">Post not found</h1>
                    <p className="text-app-300">The post you're looking for doesn't exist or has been removed.</p>
                    <Link
                        href="/"
                        className="inline-block mt-4 px-4 py-2 bg-app-200 text-app-500 rounded-lg hover:bg-app-200/80 transition-colors"
                    >
                        Go Home
                    </Link>
                </div>
            </section>
        );
    }

    const totalThreads = countTotalThreads(post);

    return (
        <section className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="flex items-center gap-4 mb-6">
                <Link
                    href="/"
                    className="p-2 rounded-lg hover:bg-app-150 transition-colors"
                >
                    <ArrowLeftIcon className="size-6 text-app-400" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-app-500">Post Details</h1>
                    <p className="text-app-300">View discussion and replies</p>
                </div>
            </header>

            {/* Main Post */}
            <div className="mb-8">
                <ThreadItem post={post} />
            </div>

            {/* Thread Statistics */}
            <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-4 mb-6">
                <div className="flex items-center gap-6 text-sm text-app-300">
                    <div className="flex items-center gap-2">
                        <ChatCircleIcon className="size-4" />
                        <span>{totalThreads} {totalThreads === 1 ? 'reply' : 'replies'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <HeartIcon className="size-4" />
                        <span>42 likes</span> {/* TODO: Add actual likes count */}
                    </div>
                    <div>
                        <span>Posted {formatDate(post.created_at)}</span>
                    </div>
                </div>
            </div>

            {/* Reply Form */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-app-400 mb-4">Add a Reply</h3>
                <ReplyForm postId={id} />
            </div>

            {/* Recent Activity */}
            {totalThreads > 0 && (
                <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-4">
                    <h3 className="text-lg font-semibold text-app-400 mb-4">Recent Activity</h3>
                    <div className="space-y-2 text-sm text-app-300">
                        <p>• {post.user.name} started this discussion</p>
                        <p>• {totalThreads} people have replied</p>
                        <p>• Last activity {formatDate(post.updated_at)}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

// Helper function to count total threads recursively
function countTotalThreads(post: any): number {
    let count = post.threads?.length || 0;

    if (post.threads) {
        for (const thread of post.threads) {
            count += countTotalThreads(thread);
        }
    }

    return count;
}