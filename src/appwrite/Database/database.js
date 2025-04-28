import { Client, Databases, ID ,Query } from "appwrite";
import conf from "../conf";

const client = new Client()
  .setEndpoint(conf.appwriteurl)
  .setProject(conf.appwriteProjectId);

const databases = new Databases(client);

export const uploadData = async ({ pair, date, notes }) => {
  try {
    const data = await databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      ID.unique(),
      { Pair: pair, Date: date, Notes: notes }
    );
    // console.log(data);
    return data;
  } catch (error) {
    console.log("Error in Databse",error);
    
  }
};


export const fetchdata = async () => {
  try {
    const data = await databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        // [
        //     optional will see it later
        //     Query.equal('title', 'Hamlet')
        // ]
    );
    return data;
  } catch (error) {
    console.log("Error in Databse",error);
    
  }
};
