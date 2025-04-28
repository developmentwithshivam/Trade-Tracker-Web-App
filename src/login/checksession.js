import { getsession } from "../appwrite/auth";

const checksession = () => {
    getsession().then(()=>{
        return true;
    })
    .catch((error)=>{
        console.log("This error by Getsession : ",error);
        
        return false
    })
}

export default checksession