import { logout } from "../appwrite/auth"
import {removeloginsession} from "../redux/slice/login/loginSlice";

export const handlelogout = (islogin,dispatch)=>{
    if(islogin!==null){
        logout().then(()=>{
        dispatch(removeloginsession())
    })
}
}