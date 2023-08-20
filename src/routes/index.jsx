import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import {AdmRoutes} from "./adm.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
     const user = localStorage.getItem('@foodexplorer:isAdm')
     
    
       

    if(user){
        if(user == 1){
            return (
                <BrowserRouter>
                    <AdmRoutes/>
                </BrowserRouter>
            )
        }else{
            return (
                <BrowserRouter>
                    <AppRoutes/>
                </BrowserRouter>
            )
        }

       
    }else {
        return (
            <BrowserRouter>
                <AuthRoutes/>
            </BrowserRouter>
        )
    }

}