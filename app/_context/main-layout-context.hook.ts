import { useContext } from "react"
import { MainLayoutContext } from "./main-layout-context"

export const useMainLayout = () => {
    const context = useContext(MainLayoutContext);
    if(!context) throw new Error("Context called in outside the provider.")
    
    return context;
}