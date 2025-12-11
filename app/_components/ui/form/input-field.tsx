import { InputHTMLAttributes } from "react";

interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    className?: string;
    error?: string;
}

const InputField = ({ label, id, className = "", error, ...props }: IInputFieldProps) => {
  const hasError = Boolean(error);

  return (
    <div className='flex flex-col gap-1'>
        <label htmlFor={id} className={`text-sm ${hasError ? 'text-red-400' : 'text-app-300/60'}`}>
            {label}
        </label>
        <input
            id={id}
            className={`text-app-400 rounded-md px-3 py-2 border placeholder:text-app-300/40 transition-colors ease-in-out duration-300 focus:outline-2 focus:outline-app-300/40 ${
                hasError
                    ? 'border-red-400 focus:border-red-400'
                    : 'border-app-300/10 focus:border-app-300/60'
            } ${className}`}
            {...props}
        />
        {hasError && (
            <span className="text-sm text-red-400">{error}</span>
        )}
    </div>
  )
}

export default InputField