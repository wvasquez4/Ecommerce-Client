import { ENV } from "@/utils";
import { jwtDecode } from "jwt-decode";

export class Token{
    setToken(token){
        localStorage.setItem(ENV.TOKEN, token);
    }

    // getToken(){
    //     return localStorage.getItem(ENV.TOKEN);
    // }

    // hasExpired(token){
    //     const tokenDecode = jwtDecode(token);
        
    // }
}