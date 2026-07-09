
import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
 import User from "@/models/user.model";
 import bcrypt from "bcryptjs";
export async function POST(req:NextRequest){
  try{
   await connectDB()

const {name,email,password} = await req.json()






const existingUser =await User.findOne({email})

if(existingUser){

  return  NextResponse.json({message:"Email already exists"},{status:400})
}


const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;

if (!passwordRegex.test(password)) {
  return NextResponse.json(
    {
      message:
        "Password must be at least 8 characters and include uppercase, lowercase, number and special character.",
    },
    { status: 400 }
  );
}


const hashedPassword = await bcrypt.hash(password,8);

const user = await User.create({
  name, email, password: hashedPassword,
})

return NextResponse.json(user,{status:200})


  }catch(e){
    return NextResponse.json({message:`register error ${e}`},{status:500})
  }

}

