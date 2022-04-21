
import { useContext } from "react"
import {AuthContext} from  "../Contexts/AuthContext"

export const Status = () => {
    const {token, isAuth} = useContext(AuthContext)
    return <>
       
        {isAuth? <h3>status: true <br /> user token: {token}  </h3>:null}
    
    
    </>
}