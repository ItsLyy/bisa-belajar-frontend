/**
 * Node Modules
 */
import { TextareaHTMLAttributes } from "react";

interface IAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    id: string;
    className?: string
}

const AreaField = ({ label, id, className = "", ...props }: IAreaFieldProps) => {
  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor={id} className="text-sm text-app-300/60">{label}</label>
        <textarea id={id} className={`text-app-400 rounded-md px-3 py-2 border border-app-300/10 placeholder:text-app-300/40 transition-colors ease-in-out duration-300 focus:border-app-300/60 focus:outline-2 focus:outline-app-300/40 resize-y min-h-54 ${className}`} {...props} ></textarea>
    </div>
  )
}

export default AreaField