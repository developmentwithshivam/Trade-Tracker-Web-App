import { Client, Account, ID } from "appwrite";
import conf from "./conf";

const client = new Client()
    .setEndpoint(conf.appwriteurl) // Your API Endpoint
    .setProject(conf.appwriteProjectId); // Your project ID

const account = new Account(client);

export async function createuser(email,password,name) {
    try {
        const user = await account.create(
            ID.unique(),
            
            email,
            password,
            name
            // 'howareyou@gmail.com',
            // 'password'
        ); 
        console.log('User created successfully:', user);
        return user;
    } catch (error) {
        throw error;
    }
}

    export async function login(email,password) {
        try {
            const session = await account.createEmailPasswordSession(
                email,
                password
            ); 
            // console.log("User logged in successfully.");
            return session
        } catch (error) {
            // console.log(error);
            throw error
        }
    }

export async function logout() {
    console.log("start loging out");
    
    try {
        // let user =await getuser()
        // .then((user)=>{user && console.log(user)})
        // .catch((error)=>{console.dir("user not found :",error);
        // })
        // console.log(user);
        
        // if(user){
            const logout = await account.deleteSession('current');
            console.log("User logged out successfully : ",logout);
        // }
        // else{
            // console.log("Please login");
            
        // }
        // return user;
    } catch (error) {
        console.error("Error logging out:", error);
    }
}


export async function getuser() {
    
    
    try {
        const user = await account.get();
        // console.log("User found:", user);
        return user;
    } catch (error) {
        // console.log("user not found");
        // console.error("Error logging out:", error);
        throw error;
    //    console.log("Error Through getuser function :",error);
       
       
    }
}

export async function getsession() {
    try{
        const user = await account.getSession(
            'current' // sessionId
        );
        return user;
    }
    catch(error){
       throw error
    }

}

// export default [createuser,login]