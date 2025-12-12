/**
 * Components
 */
import Avatar from '@/app/_components/general/avatar';
import { ChatCircleIcon, HeartIcon } from '@phosphor-icons/react/dist/ssr';

/**
 * Utils
 */
import { formatDate } from '@/app/_utils/format-date';

/**
 * Types
 */
import type { IPost } from '@/app/_type';

interface IThreadItemProps {
    post: IPost;
    depth?: number;
    maxDepth?: number;
}

const ThreadItem = ({ post, depth = 0, maxDepth = 5 }: IThreadItemProps) => {
    const isReply = depth > 0;
    const canShowReplies = depth < maxDepth && post.threads && post.threads.length > 0;

    return (
        <div className={`${isReply ? 'ml-8 border-l-2 border-app-300/20 pl-4' : ''}`}>
            <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-4 mb-4">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                    <Avatar
                        name={post.user.name}
                        imageUrl={post.user.avatar_path}
                        className="size-8 shrink-0"
                    />
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-app-400 text-sm">{post.user.name}</span>
                            {post.user.score && (
                                <span className="text-xs bg-app-200/20 text-app-200 px-2 py-1 rounded">
                                    {post.user.score}/5.0 ⭐
                                </span>
                            )}
                        </div>
                        <div className="text-xs text-app-300">
                            {formatDate(post.created_at)}
                        </div>
                    </div>
                </div>

                {/* Post Content */}
                <div className="space-y-3">
                    {post.title && !isReply && (
                        <h3 className="font-semibold text-app-500 text-lg">{post.title}</h3>
                    )}

                    <p className="text-app-300 leading-relaxed whitespace-pre-wrap">
                        {post.content}
                    </p>

                    {post.photo_url && (
                        <div className="rounded-lg overflow-hidden border border-app-300/20">
                            <img
                                src={post.photo_url}
                                alt="Post attachment"
                                className="w-full max-w-md h-auto"
                            />
                        </div>
                    )}

                    {post.course && (
                        <div className="bg-app-150/30 rounded-lg p-3 border border-app-300/10">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs text-app-300 uppercase tracking-wide">Related Course</span>
                            </div>
                            <p className="text-sm text-app-400 font-medium">{post.course.title}</p>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-app-300/10">
                    <button className="flex items-center gap-2 text-app-300 hover:text-app-200 transition-colors text-sm">
                        <HeartIcon className="size-4" />
                        <span>Like</span>
                    </button>

                    <button className="flex items-center gap-2 text-app-300 hover:text-app-200 transition-colors text-sm">
                        <ChatCircleIcon className="size-4" />
                        <span>Reply</span>
                    </button>

                    {post.threads && post.threads.length > 0 && (
                        <span className="text-xs text-app-300">
                            {post.threads.length} {post.threads.length === 1 ? 'reply' : 'replies'}
                        </span>
                    )}
                </div>
            </div>

            {/* Nested Replies */}
            {canShowReplies && (
                <div className="space-y-4">
                    {post.threads.map((thread) => (
                        <ThreadItem
                            key={thread.id}
                            post={thread}
                            depth={depth + 1}
                            maxDepth={maxDepth}
                        />
                    ))}
                </div>
            )}

            {/* Show more indicator for deeply nested threads */}
            {depth >= maxDepth && post.threads && post.threads.length > 0 && (
                <div className="ml-8 text-center py-4">
                    <button className="text-app-300 hover:text-app-200 transition-colors text-sm">
                        View {post.threads.length} more {post.threads.length === 1 ? 'reply' : 'replies'}...
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThreadItem;