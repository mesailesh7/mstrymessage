import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs"
import {sendVerificationEmail} from "@/helpers/sendVerificationEmail";


export async function POST(request: Request) {
  await dbConnect()

  try{
    const {username,email,password} = await request.json()

  } catch (e) {
    console.error('Error registering user', e)
    return response.json({
      success: false,
      message: "Error registering user"
    }, {
      status: 500
    })
  }
}