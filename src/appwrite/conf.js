import config from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userID }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          Content: content,
          fileId: featuredImage,
          status,
          user_id: userID,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost::error", error + content);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("ERROR WHILE UPDATING", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Eroor while deletting post", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Error while getting post", error);
    }
  }
  async getAllposts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log(config.appwriteDatabaseId);
      console.log("Error while getting all posts hello ", error);
      return false;
    }
  }

  // file upload services
  async uploadFile(featured_img) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        featured_img
      );
    } catch (error) {
      console.log("Error while uploading file hellep", error);
      return false;
    }
  }

  async deleteFile(featured_img) {
    try {
      return await this.bucket.deleteFile(
        config.appwriteBucketId,
        featured_img
      );
    } catch (error) {
      console.log("Eroor while deleting file", error);
      return false;
    }
  }

  getFilePreview(featured_img) {
    const promse = this.bucket.getFilePreview(
      config.appwriteBucketId,
      featured_img
    );

    return promse;
  }
}

const service = new Service();

export default service;
