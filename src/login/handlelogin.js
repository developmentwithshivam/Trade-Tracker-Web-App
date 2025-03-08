import { checkerrormessage } from "./checkerrormessage";
import { login } from "../appwrite/auth";
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
    login(email, password)
      .then((response) => {
        console.dir(response);
        if(response){
          dispatch(setloginsession(response));
        }
        setsuccessmessage("Logged in successfully.")
      })
      .catch((error) => {
        console.dir(error);
        seterrormessage(checkerrormessage(error));
      })
      .finally(()=>{setloading(false)})
  } else {
    seterrormessage("Email & Password Required");
  }

  //  console.dir(response);
};
