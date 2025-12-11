import { Icon } from "@phosphor-icons/react";
import Link from "next/link";

interface ISettingCardProps {
    icon: Icon;
    title: string;
    link: string;
    value?: string;
}

const SettingCard = ({ icon, title, link, value }: ISettingCardProps) => {
    const Icon = icon;
    return (
        <Link href={link} className="p-4 flex items-center rounded-xl bg-app-150 overflow-hidden gap-4">
            <div className="shrink-0 flex justify-center items-center p-2 rounded-full bg-app-200/30 border border-app-200 text-app-200 shadow-[0_0_40px_2px] shadow-app-200/40">
                <Icon className="size-6" />
            </div>
            <div>
                <h2 className="uppercase text-sm font-semibold text-app-300/60">{title}</h2>
                <p className={`line-clamp-1 ${value ? 'text-app-400' : 'text-app-300/40'}`}>{value ? value : "None"}</p>
            </div>
        </Link>
    )
}

export default SettingCard