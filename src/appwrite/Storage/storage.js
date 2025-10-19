import { Client, Storage, ID } from "appwrite";
import conf from "../conf";
const client = new Client()
  .setEndpoint(conf.appwriteurl)
  .setProject(conf.appwriteProjectId);

const storage = new Storage(client);

export const uploadimage = async (data) => {
  try {
    const res = await storage.createFile(
      conf.appwriteStorageId,
      ID.unique(),
      data.image[0],
    );
    return res;
  } catch (error) {
    console.log("Error in Storage ", error);
  }
};

export const fetchimage = async () => {
  try {
    const res = await storage.listFiles(conf.appwriteStorageId);
    return res;
  } catch (error) {
    console.log("Error in Storage ", error);
  }
};

export const getpreview = async (fileId) => {
  try {
    const res = storage.getFileView(conf.appwriteStorageId, fileId);
    return res;
  } catch (error) {
    console.log("Error in Storage ", error);
  }
};
