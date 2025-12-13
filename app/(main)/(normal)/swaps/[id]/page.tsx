/**
 * Components
 */
import SwapHeader from './_components/swap-header';
import SkillCard from './_components/skill-card';
import SwapActions from './_components/swap-actions';

/**
 * Utils
 */
import { getSwap } from "@/app/_datas/swaps/get-swap";

/**
 * Types
 */
import type { Metadata } from 'next';
import { formatDate } from '@/app/_utils/format-date';

interface ISwapDetailPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ISwapDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const swap = await getSwap(Number(id));

    return {
        title: swap ? `Swap with ${swap.requester.name}` : 'Swap Details',
        description: swap ? `Skill swap request from ${swap.requester.name} offering ${swap.requester_skill.name}` : 'View swap details'
    };
}

export default async function SwapDetailPage({ params }: ISwapDetailPageProps) {
    const { id } = await params;
    const swap = await getSwap(Number(id));

    if (!swap) {
        return (
            <section className="flex items-center justify-center min-h-[90vh]">
                <div className="text-center">
                    <h1 className="text-2xl text-app-500 font-bold mb-2">Swap not found</h1>
                    <p className="text-app-300">The swap you're looking for doesn't exist or has been removed.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-[600px] mx-auto w-full">
            <div className="space-y-6">
                {/* Header */}
                <SwapHeader swap={swap} />

                {/* Description */}
                {swap.description && (
                    <div className="bg-app-100/30 p-4 rounded-xl border border-app-300/10">
                        <h3 className="text-app-500 font-semibold mb-2">Description</h3>
                        <p className="text-app-300 leading-relaxed">{swap.description}</p>
                    </div>
                )}

                {/* Skills */}
                <div className="grid md:grid-cols-2 gap-4">
                    <SkillCard skill={swap.requester_skill} type="offering" />
                    {swap.requested_skill && (
                        <SkillCard skill={swap.requested_skill} type="requesting" />
                    )}
                </div>

                {/* Actions */}
                <div className="border-t border-t-app-300/20 pt-6">
                    <SwapActions swap={swap} />
                </div>

                {/* Metadata */}
                <div className="text-xs text-app-300 space-y-1 border-t border-t-app-300/10 pt-4">
                    <p>Created: {formatDate(swap.created_at)}</p>
                    <p>Last updated: {formatDate(swap.updated_at)}</p>
                </div>
            </div>
        </section>
    );
}
