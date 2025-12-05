interface IInformationProps {
    name: string
    skills: string[]
    score: number
}

const Information = ({ name, skills, score }: IInformationProps) => {
  return (
    <div className="space-y-1 max-w-full pt-1">
        <div className='flex gap-3 items-end text-nowrap'>
            <h2 className="leading-[77%] text-lg text-app-500 border-r border-app-300/40 pr-3">{name}</h2>
            <span className='leading-[77%] text-app-200 text-sm'>{score}</span>
        </div>
        <span className="leading-[77%] text-app-300/60 text-sm">{skills.length > 0 ? skills.join(", ") : "None"}</span>
    </div>
  )
}

export default Information