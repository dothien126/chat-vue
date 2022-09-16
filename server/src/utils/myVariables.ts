import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
//Set up môi trường
export const env = {
  dbName: process.env.DB_NAME as string,
  dbHostName: process.env.DB_HOST_NAME as string,
  dbPort: process.env.DB_PORT as string,
  dbUserName: process.env.DB_USER_NAME as string,
  dbPassword: process.env.DB_PASSWORD as string,
  JWT_REFRESH_KEY: process.env.JWT_REFRESH_KEY as string,
  JWT_ACCESS_KEY: process.env.JWT_ACCESS_KEY as string,
  MONGODB: process.env.MONGODB as string,
  CLIENT_HOST: process.env.CLIENT_HOST as string,
  CHAT_APP: process.env.CHAT_APP as string,
};

// Message
export const errorUnknown = 'Unknown error';
export const notFoundMsg = { error: 'Data is not exist!' };
export const canNotSearchWhenBlocked = `You can't search for this person`;
