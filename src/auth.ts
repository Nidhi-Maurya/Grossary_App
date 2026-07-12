import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectDB from "./lib/db"
import User from "./models/user.model"
import bcrypt from "bcryptjs"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
       Credentials({
         credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials,request)
{
    
        await connectDB()
        const email=credentials.email
        const password= credentials.password as string 

        const user = await User.findOne({email})

        if(!user){
          throw new Error("user does not exist")
        }
      
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
          throw new Error("Invalid credentials")
        }
          return {
            id:user._id.toString(),
            email:user.email,
            name:user.name,
          
          }
      
}       }) ,




  ],

callbacks:{
  //! token ke ander user ka data dalta hai //! Sign In

   jwt({token,user}) {
    if(user) {
      token.id=user.id,
      token.name=user.name,
      token.email=user.email,
      token.role=user.role
    }
    return token 
   },

   session({session,token}){
    if(session.user){
      session.user.id=token.id as string,
      session.user.name=token.name as string,
      session.user.email=token.email as string,
      session.user.role=token.role as string
    }
    return session
   }
},

pages:{
  signIn:"/login",
  error:"/login",

},
session:{
  strategy:"jwt",
  maxAge:24*60*60*1000,
},

secret:process.env.AUTH_SECRET,

debug:true 
})



// Db conenct 
//email  check
// passowrd match 
//
