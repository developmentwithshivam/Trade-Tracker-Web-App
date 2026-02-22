import { Client, Storage, ID } from "appwrite";
import conf from "../conf";
const client = new Client()
  .setEndpoint(conf.appwriteurl)
  .setProject(conf.appwriteProjectId);

const storage = new Storage(client);

export const uploadimage = async (image, id) => {
  try {
    const res = await storage.createFile(conf.appwriteStorageId, id, image);
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

export const deleteImage = async (postid) => {
  try {
    await storage.deleteFile(conf.appwriteStorageId, postid);
    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
};
