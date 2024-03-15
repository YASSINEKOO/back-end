import dotenv from 'dotenv';

dotenv.config();

const config = {
  MONGODB_URI:process.env.MONGODB_URI,
  port: process.env.PORT,
};

export default config;