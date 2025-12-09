const Tags = ({ tags, className = "" }: { tags: string[], className?: string }) => {
  return (
    <div className={"flex gap-2 grow-0 h-fit"}>
        {
            tags.map((tag, index) => (
                <span className={`p-2 leading-[77%] rounded-md bg-app-200/15 text-app-200 border border-app-200 text-sm ${className}`} key={index}>{tag}</span>
            ))
        }
    </div>
  )
}

export default Tags