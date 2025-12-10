import { UploadSimpleIcon } from "@phosphor-icons/react/dist/ssr"
import { InputHTMLAttributes } from "react"

interface IImageUploadProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
}

const ImageUpload = ({ id }: IImageUploadProps) => {
  return (
    <div>
        <label htmlFor={id} className="w-full aspect-video border cursor-pointer border-app-150 bg-app-150/10 text-app-300/60 flex flex-col gap-2 items-center justify-center rounded-md">
            <UploadSimpleIcon className="size-12" />
            <span>Click to upload the image</span>
        </label>
        <input type="file" id={id} accept="image/*" hidden />
    </div>
  )
}

export default ImageUpload