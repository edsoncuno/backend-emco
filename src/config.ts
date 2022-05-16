import dotenv from 'dotenv'
dotenv.config();

export default {
    SERVER_PORT: process.env.SERVER_PORT,
    MONGODB_HOST: process.env.MONGODB_HOST,
    MONGODB_NAME: process.env.MONGODB_NAME,
    MONGODB_USER: process.env.MONGODB_USER,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD
}