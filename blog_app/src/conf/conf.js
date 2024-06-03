const conf = {
    appwriteUrl: String(import.meta.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.VITE_BUCKET_ID),
}


export default conf