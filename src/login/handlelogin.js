import { checkerrormessage } from "./checkerrormessage";
import { login,getuser } from "../appwrite/auth";
import { setloginsession } from "../redux/slice/login/loginSlice";

export const handlelogin = (
  setloading,
  seterrormessage,
  setsuccessmessage,
  email,
  password,
  dispatch
) => {
  if (email && password) {
    setloading(true);
    seterrormessage(null)
    setsuccessmessage(null)
    return login(email, password)
      .then((response) => {
        // console.dir(response);
        if(response){
          return getuser().then((user)=>{
               dispatch(setloginsession(user))
               setsuccessmessage("Logged in successfully.")
           })
        }
          // dispatch(setloginsession(response));
      })
      .catch((error) => {
        // seterrormessage("Password Must be between 8 and 256 characters.")
        throw error;
        // console.dir(error);
        // seterrormessage(checkerrormessage(error));
      })
      .finally(()=>{setloading(false)})
  } else {
    seterrormessage("Email & Password Required");
  }

  //  console.dir(response);
};
