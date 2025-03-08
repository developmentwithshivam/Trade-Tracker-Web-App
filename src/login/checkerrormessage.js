export const checkerrormessage = (error)=>{
  // console.log(error.code);
  
  switch (error.code) {
    case 401:
      return "Invalid credentials. Please check your email and password.";
    case 404:
      return "User not found. Please register first.";
    case 403:
      return "Your account is blocked. Please contact support.";
    case 429:
      return "Too many requests. Please try again later.";
    case 500:
      return "Server error. Please try again later.";
    default:
      return  "An unknown error occurred.";
  }
}