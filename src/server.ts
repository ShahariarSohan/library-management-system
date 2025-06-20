import mongoose from "mongoose";
import {Server} from 'http'
import dotenv from 'dotenv';
dotenv.config();
import app from "./app";



async function main() {
    
    try {
        await mongoose.connect(process.env.DATABASE_URL as string)
        console.log("✅ Connected to MongoDB")
        
        const server: Server = app.listen(process.env.PORT, () => {
          console.log(`✅ Server is running on port ${process.env.PORT}`);
        });
    }
    catch(error)
    {
        console.log("❌ Connection failed",error)
   }
  
}

main()