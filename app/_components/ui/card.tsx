/**
 * Node Modules
 */
import React from "react"

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }): React.ReactElement => {
  return (
    <div className={`bg-app-150 rounded-2xl shadow shadow-black/20 p-3 ${className}`}>{children}</div>
  )
}

export default Card