/**
 * Components
 */
import { TagIcon, BookOpenIcon } from '@phosphor-icons/react/dist/ssr';

/**
 * Types
 */
import type { ISkill } from '@/app/_type';

interface ISkillCardProps {
    skill: ISkill;
    type: 'offering' | 'requesting';
}

const SkillCard = ({ skill, type }: ISkillCardProps) => {
    const isOffering = type === 'offering';

    return (
        <div className={`p-4 rounded-xl border ${isOffering ? 'bg-app-200/10 border-app-200/30' : 'bg-app-150/30 border-app-300/20'}`}>
            <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${isOffering ? 'bg-app-200/20' : 'bg-app-150'}`}>
                    {isOffering ? (
                        <TagIcon className="size-5 text-app-200" weight="duotone" />
                    ) : (
                        <BookOpenIcon className="size-5 text-app-400" weight="duotone" />
                    )}
                </div>
                <div>
                    <h3 className={`font-semibold ${isOffering ? 'text-app-200' : 'text-app-400'}`}>
                        {isOffering ? 'Offering' : 'Requesting'}
                    </h3>
                    <p className="text-app-500 font-medium">{skill.name}</p>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-app-300 bg-app-100/50 px-2 py-1 rounded">
                        {skill.category}
                    </span>
                </div>
                <p className="text-app-300 text-sm leading-relaxed">
                    {skill.description}
                </p>
            </div>
        </div>
    );
};

export default SkillCard;