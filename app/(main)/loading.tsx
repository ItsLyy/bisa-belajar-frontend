import Logo from "../_components/general/logo";

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-svh w-full'>
        <Logo className="grayscale-100 animate-pulse opacity-40" />
    </div>
  )
}
