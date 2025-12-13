"use client";

/**
 * Components
 */
import { PaperPlaneRightIcon } from '@phosphor-icons/react/dist/ssr';
import Avatar from '@/app/_components/general/avatar';

/**
 * Hooks
 */
import { useState } from 'react';

interface IReplyFormProps {
    postId: string;
    parentId?: string;
    placeholder?: string;
    onReply?: () => void;
}

const ReplyForm = ({ postId, parentId, placeholder = "Write a reply...", onReply }: IReplyFormProps) => {
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!content.trim()) return;

        setIsSubmitting(true);

        try {
            // TODO: Implement API call to create reply
            console.log('Creating reply:', {
                postId,
                parentId,
                content: content.trim()
            });

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            setContent('');
            onReply?.();
        } catch (error) {
            console.error('Error creating reply:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3">
                    <Avatar
                        name="Current User" // TODO: Get from user context
                        className="size-8 shrink-0"
                    />
                    <div className="flex-1">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder={placeholder}
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg bg-app-150 border border-app-300/20 focus:outline-none focus:ring-2 focus:ring-app-200 focus:border-transparent resize-none"
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={!content.trim() || isSubmitting}
                        className="flex items-center gap-2 px-4 py-2 bg-app-200 text-app-500 rounded-lg font-medium hover:bg-app-200/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <PaperPlaneRightIcon className="size-4" />
                        <span>{isSubmitting ? 'Posting...' : 'Post Reply'}</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReplyForm;