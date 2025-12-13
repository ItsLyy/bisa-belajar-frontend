import Image from 'next/image'

interface IAvatarProps {
    name: string
    imageUrl?: string
    className?: string
}

const Avatar = ({name, imageUrl = "", className = ""}: IAvatarProps) => {
    const initialName = name.slice(0, 1)
    return (
        <div className={`rounded-full size-12 text-xl bg-app-200/20 flex justify-center items-center text-app-200 ${className}`}>
            {imageUrl ? <Image src={imageUrl} alt='profile' fill sizes='48px' className='object-cover rounded-full' /> : <span>{initialName}</span>}
        </div>
    )
}

export default Avatar