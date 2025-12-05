import { TargetIcon } from "@phosphor-icons/react/dist/ssr";

const Logo = ({ className="", ...props }: { className?: string }) => (
    <div className="flex items-center gap-3">
        <TargetIcon className="text-app-200 size-8" />
        <h2 className="text-lg text-app-400 font-black leading-[77%]" {...props}>SKILL<span className="text-app-200">.</span>MATCH</h2>
    </div>
)

export default Logo;
