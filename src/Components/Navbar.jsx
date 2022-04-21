import {AuthContext} from  "../Contexts/AuthContext"
import { useContext } from "react"

export const Navbar = () => {
    const { isAuth } = useContext(AuthContext)
    const {toggleAuth}= useContext(AuthContext)
    return <>
    
        <nav>
            <button onClick={ toggleAuth}> {isAuth?"Logout": "Login"}  </button>
    </nav>
    
    </>
}