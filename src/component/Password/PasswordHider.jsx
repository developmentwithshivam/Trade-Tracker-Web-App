import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
function PasswordHider({register,errors}) {
  const [passwordvesibility, setpasswordvesibility] = useState(false);
  const togglepasswordvesibility=()=>{
    setpasswordvesibility((prev)=>!prev)
  }
  return (
    <>
     <div className=" relative">
     <input
              type={passwordvesibility?"text":"password"}
              placeholder="••••••••"
              {...register("Password",{required:"This field is required"})}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800"
            />
            {errors?.Password && <div className="text-sm text-red-600">{errors.Password.message}</div>}
            
              <div onClick={togglepasswordvesibility} className="w-8 h-8 text-center rounded-full absolute right-3 top-2 cursor-pointer">
             {passwordvesibility? <FontAwesomeIcon icon={faEye} />:<FontAwesomeIcon icon={faEyeSlash} />
}
              </div>
            </div>
    </>
  )
}

export default PasswordHider