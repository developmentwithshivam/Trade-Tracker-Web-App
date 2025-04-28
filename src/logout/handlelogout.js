import { logout } from "../appwrite/auth"
import {removeloginsession} from "../redux/slice/login/loginSlice";
import {setloding} from "../redux/slice/logout/logoutSlice"
export const handlelogout = (islogin,dispatch)=>{
    if(islogin!==null){
        logout().then(()=>{
        dispatch(removeloginsession())
    }).finally(()=>{dispatch(setloding(false))})
}
}