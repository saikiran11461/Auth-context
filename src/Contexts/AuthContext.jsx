
import { createContext, useState } from "react"
import axios from "axios"
export const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)

    const [token, SetToken] = useState("")

    const toggleAuth = (token) => {
        let data = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
                        }
axios.post("https://reqres.in/api/register", data).then((res)=>{ SetToken(res.data.token)})

        setIsAuth(!isAuth)
       
    }
    return (

        <AuthContext.Provider value={{isAuth,toggleAuth,token }}>{ children}</AuthContext.Provider>
    )
}