/**
 * Components
 */
import Avatar from '@/app/_components/general/avatar';

/**
 * Types
 */
import type { ISwap } from '@/app/_type';

interface ISwapHeaderProps {
    swap: ISwap;
}

const SwapHeader = ({ swap }: ISwapHeaderProps) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
            case 'accepted':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
            case 'declined':
                return 'bg-red-500/20 text-red-400 border-red-500/30';
            case 'completed':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            default:
                return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        }
    };

    return (
        <header className="border-b border-b-app-300/20 pb-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <Avatar
                        name={swap.requester.name}
                        imageUrl={swap.requester.avatar_path}
                        className="size-16 shrink-0"
                    />
                    <div>
                        <h1 className="text-2xl text-app-500 font-bold">{swap.requester.name}</h1>
                        <p className="text-app-300">Score: {swap.requester.score}/5.0 ⭐</p>
                    </div>
                </div>
                <div className={`px-3 py-1 rounded-full border text-sm font-medium capitalize ${getStatusColor(swap.status)}`}>
                    {swap.status}
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-app-300 text-sm">Offering:</span>
                    <span className="bg-app-200/20 text-app-200 px-2 py-1 rounded-md text-sm font-medium">
                        {swap.requester_skill.name}
                    </span>
                </div>
                {swap.requested_skill && (
                    <div className="flex items-center gap-2">
                        <span className="text-app-300 text-sm">Requesting:</span>
                        <span className="bg-app-150/50 text-app-400 px-2 py-1 rounded-md text-sm font-medium">
                            {swap.requested_skill.name}
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
};

export default SwapHeader;