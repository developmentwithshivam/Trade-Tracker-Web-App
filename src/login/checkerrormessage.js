export const checkerrormessage = (error)=>{
  console.dir(error);
  console.log(error.code);
  
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
      case 409:
        return "Email is already registered.";
      case 400:
        if (error.message.includes("password")) {
          return "Password must be between 8 and 256 characters.";
        }
        return "Please fill in all fields correctly.";
    default:
      return  "An unknown error occurred.";
  }
}