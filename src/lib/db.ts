
import mongoose from "mongoose";
 

 const mongodbUrl=process.env.MONGODB_URI 

 if(!mongodbUrl){
  throw new Error("MONGODB_URI is not defined in the environment variables")
 }


 let  cached= global.mongoose
 if(!cached){
  cached=global.mongoose={connection:null,promise:null}
 }

const connectDB= async ()=>{
  if(cached.connection)
  {
    return cached.connection
  } 

  if(!cached.promise){
    cached.promise= mongoose.connect(mongodbUrl).then((connection)=> connection.connection)
  }

    try{
      const connection = await cached.promise
      return connection

    }catch(e){
      console.log(e)
    }

}


export default connectDB

