import { useContext } from "react"
import { AuthContext } from "./auth-layout";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error("Context called in outside the provider.")
    
    return context;
}