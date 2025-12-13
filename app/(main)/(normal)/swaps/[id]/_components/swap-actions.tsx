"use client";

/**
 * Components
 */
import { CheckIcon, XIcon, ClockIcon } from '@phosphor-icons/react/dist/ssr';

/**
 * Actions
 */
import { acceptSwap, declineSwap, completeSwap, cancelSwap, updateSwap } from '../../actions';

/**
 * Types
 */
import type { ISwap } from '@/app/_type';

interface ISwapActionsProps {
    swap: ISwap;
}

const SwapActions = ({ swap }: ISwapActionsProps) => {
    // Handle accept action
    const handleAccept = async () => {
        const result = await acceptSwap(swap.id);
        if (!result.success) {
            console.error('Failed to accept swap:', result.message);
        }
    };

    // Handle decline action
    const handleDecline = async () => {
        const result = await declineSwap(swap.id);
        if (!result.success) {
            console.error('Failed to decline swap:', result.message);
        }
    };

    // Handle complete action
    const handleComplete = async () => {
        const result = await completeSwap(swap.id);
        if (!result.success) {
            console.error('Failed to complete swap:', result.message);
        }
    };

    // Handle cancel action (for pending swaps by requester)
    const handleCancel = async () => {
        const result = await cancelSwap(swap.id);
        if (!result.success) {
            console.error('Failed to cancel swap:', result.message);
        }
    };

    if (swap.status === 'completed') {
        return (
            <div className="flex items-center gap-2 text-green-400 bg-green-500/10 px-4 py-3 rounded-xl border border-green-500/20">
                <CheckIcon className="size-5" />
                <span className="font-medium">Swap Completed</span>
            </div>
        );
    }

    if (swap.status === 'declined') {
        return (
            <div className="flex items-center gap-2 text-red-400 bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20">
                <XIcon className="size-5" />
                <span className="font-medium">Swap Declined</span>
            </div>
        );
    }

    if (swap.status === 'cancelled') {
        return (
            <div className="flex items-center gap-2 text-gray-400 bg-gray-500/10 px-4 py-3 rounded-xl border border-gray-500/20">
                <XIcon className="size-5" />
                <span className="font-medium">Swap Cancelled</span>
            </div>
        );
    }

    if (swap.status === 'accepted') {
        return (
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 px-4 py-3 rounded-xl border border-blue-500/20">
                    <CheckIcon className="size-5" />
                    <span className="font-medium">Swap Accepted</span>
                </div>
                <form action={async () => {
                    await completeSwap(swap.id);
                }}>
                    <button
                        type="submit"
                        className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 font-medium py-3 px-4 rounded-xl border border-green-500/30 transition-colors flex items-center justify-center gap-2"
                    >
                        <CheckIcon className="size-5" />
                        Mark as Completed
                    </button>
                </form>
            </div>
        );
    }

    // Pending status - different actions based on whether you're the requester or recipient
    // For now, we'll show both accept/decline and cancel options
    // In a real app, you'd check if current user is the recipient or requester
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2 text-yellow-400 bg-yellow-500/10 px-4 py-3 rounded-xl border border-yellow-500/20">
                <ClockIcon className="size-5" />
                <span className="font-medium">
                    {swap.status === 'pending' ? 'Waiting for response' : 'Swap in progress'}
                </span>
            </div>

            <div className="space-y-3">
                {/* Accept/Decline buttons (for recipient) */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={handleAccept}
                        className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 font-medium py-3 px-4 rounded-xl border border-green-500/30 transition-colors flex items-center justify-center gap-2"
                    >
                        <CheckIcon className="size-5" />
                        Accept
                    </button>

                    <button
                        onClick={handleDecline}
                        className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 font-medium py-3 px-4 rounded-xl border border-red-500/30 transition-colors flex items-center justify-center gap-2"
                    >
                        <XIcon className="size-5" />
                        Decline
                    </button>
                </div>

                {/* Cancel button (for requester) */}
                <button
                    onClick={handleCancel}
                    className="w-full bg-gray-500/20 hover:bg-gray-500/30 text-gray-400 font-medium py-3 px-4 rounded-xl border border-gray-500/30 transition-colors flex items-center justify-center gap-2"
                >
                    <XIcon className="size-5" />
                    Cancel Request
                </button>
            </div>
        </div>
    );
};

export default SwapActions;