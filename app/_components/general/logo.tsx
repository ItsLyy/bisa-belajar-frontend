import { TargetIcon } from "@phosphor-icons/react/dist/ssr";

const Logo = ({ className="", textHidden = false, ...props }: { className?: string; textHidden?: boolean; }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        <TargetIcon className="text-app-200 size-8" />
        {!textHidden && <h2 className="text-lg text-app-400 font-black leading-[77%]" {...props}>SKILL<span className="text-app-200">.</span>MATCH</h2>}
    </div>
)

export default Logo;
