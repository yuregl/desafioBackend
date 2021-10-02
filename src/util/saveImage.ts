import multer from 'multer';
import fs from 'fs';
import path from 'path';
import dontenv from 'dotenv';

export const tmpFolder = path.resolve(<string>process.env.FOLDER_IMAGE);

dontenv.config();

interface IStorage{
  directory: string;
  storage: multer.StorageEngine;
}

export default function storage(): IStorage {

  const storage = multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {

      if (!fs.existsSync(tmpFolder)) {
        fs.mkdirSync(tmpFolder, { recursive: true });
      }
      const nameImageProduct = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const value = `${nameImageProduct}`;

      console.log('value: ',value);
      
      request.destination = `${tmpFolder}/${value}`;
      callback(null, value);
    }
  })

  return {
    directory: tmpFolder,
    storage,
  }
}