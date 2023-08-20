import { createContext, useContext, useState, useEffect } from "react";
import {api} from '../services/api'
export const AuthContext = createContext({})

function AuthProvider({children}){

    const [data, setData] = useState({})

    async function signIn({email, password}){
        try{
            alert('manito')
            const response = await api.post("/sessions", {email, password })
            const {user, token} = response.data
        
            console.log(user)
            localStorage.setItem("@foodexplorer:user" , JSON.stringify(user))
            localStorage.setItem("@foodexplorer:token" , token)
            localStorage.setItem("@foodexplorer:isAdm" , user.isAdm)
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({user, token})

            window.location.href='/'
            

            
            
         } catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel entrar")
            }
         }
    }

    async function signOut(){
        
        localStorage.removeItem("@foodexplorer:token")
        localStorage.removeItem("@foodexplorer:user")
        localStorage.removeItem("@foodexplorer:isAdm")

        setData({})
        window.location.href='/'
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token")
        const user = localStorage.getItem("@foodexplorer:user")
        

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
        token,
        user
            })
        }
    }, [])

    return (<AuthContext.Provider value={{signIn, signOut, user: data.user, data}}>
        {children}
    </AuthContext.Provider>)
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}