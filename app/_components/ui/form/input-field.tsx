import { InputHTMLAttributes } from "react";

interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    className?: string
}

const InputField = ({ label, id, className = "", ...props }: IInputFieldProps) => {
  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor={id} className="text-sm text-app-300/60">{label}</label>
        <input id={id} className={`text-app-400 rounded-md px-3 py-2 border border-app-300/10 placeholder:text-app-300/40 transition-colors ease-in-out duration-300 focus:border-app-300/60 focus:outline-2 focus:outline-app-300/40 ${className}`} {...props} />
    </div>
  )
}

export default InputField