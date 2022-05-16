import dotenv from 'dotenv'
dotenv.config();

export default {
    SERVER_PORT: process.env.SERVER_PORT || 5000,
    MONGODB_HOST: process.env.MONGODB_HOST || 'localhost',
    MONGODB_NAME: process.env.MONGODB_NAME || 'dbEmco',
    MONGODB_USER: process.env.MONGODB_USER || '',
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || ''
}