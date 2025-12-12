"use client";

/**
 * Components
 */
import { CheckIcon, XIcon, ClockIcon } from '@phosphor-icons/react/dist/ssr';

/**
 * Actions
 */
import { acceptSwap, declineSwap, completeSwap } from '../actions';

/**
 * Types
 */
import type { ISwap } from '@/app/_type';

interface ISwapActionsProps {
    swap: ISwap;
}

const SwapActions = ({ swap }: ISwapActionsProps) => {

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

    // Pending status - show accept/decline buttons
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2 text-yellow-400 bg-yellow-500/10 px-4 py-3 rounded-xl border border-yellow-500/20">
                <ClockIcon className="size-5" />
                <span className="font-medium">Waiting for your response</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <form action={async () => {
                    await acceptSwap(swap.id);
                }}>
                    <button
                        type="submit"
                        className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 font-medium py-3 px-4 rounded-xl border border-green-500/30 transition-colors flex items-center justify-center gap-2"
                    >
                        <CheckIcon className="size-5" />
                        Accept
                    </button>
                </form>

                <form action={async () => {
                    await declineSwap(swap.id);
                }}>
                    <button
                        type="submit"
                        className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 font-medium py-3 px-4 rounded-xl border border-red-500/30 transition-colors flex items-center justify-center gap-2"
                    >
                        <XIcon className="size-5" />
                        Decline
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SwapActions;