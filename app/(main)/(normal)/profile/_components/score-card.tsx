/**
 * Node Modules
 */
import { AlignBottomIcon } from '@phosphor-icons/react/dist/ssr'

const ScoreCard = ({ score }: { score: number }) => {
  return (
    <div className="w-full border border-app-150 rounded-2xl bg-app-150 p-6 flex-[1.6] overflow-hidden flex flex-col gap-8">
        <div className="rounded-full border border-app-200 bg-app-200/40 text-app-200 size-fit p-3 shadow-[0_0_80px_10px] shadow-app-200/50">
            <AlignBottomIcon className="size-6" />
        </div>
        <div className="flex flex-col gap-3">
            <span className="text-app-300/60 font-semibold">Score</span>
            <span className="text-5xl text-app-200 leading-[77%]">{score}</span>
        </div>
    </div>
  )
}

export default ScoreCard