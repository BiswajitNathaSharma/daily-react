import conf from "../conf/conf";
import { ID, Databases, Client, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({ title, slug, content, image, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("appwrite :: create post :: error", error);
        }
    }
    async updatePost(slug, { title, content, image, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                }
            );
        } catch (error) {
            console.log("appwrite :: updatePost :: error", error);
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("appwrite :: deletepost:: error", error);
            return false;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("appwrite :: getpose  :: error", error);
            throw error;
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("appwrite :: getposts :: error", error);
            throw error;
            return false;
        }
    }
    //  file upload service
    async uploadFile(file) {
        try {
            return  await this.bucket.createFile( 
                conf.appwriteBucketId,
                ID.unique(),
                file,
            ) ;
        } catch (error) {
            console.log("appwrite:: uploadfile :: error", error);
            throw error;
            return false;
        }
    }
    async deleteFile(fileid){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId, 
                fileid);
                return true;
        } catch (error) {
            console.log("appwrite:: deletefile :: error", error);
            throw error;
        }
    }

    getFilePreview(fileid){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileid
            )
    }
}

const service = new Service();
export default service;
