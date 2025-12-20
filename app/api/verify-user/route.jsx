import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"
import Users from '../../../config/schema'
import db from '../../../config/dbConfig'


export const POST = async(req)=> {
    const user = await req.json()

    console.log("User details", user)
    console.log("User email", user?.primaryEmailAddress?.emailAddress)

    // if user already exists?
        const existingUser = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))
        if(existingUser.length > 0) {
            return NextResponse.json({
                message: "User already exists",
                user: existingUser[0]
            })
        }
        

    // if not add new user
  try {
    const saveUser = await db.insert(Users).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl
    }).returning()

    return NextResponse.json({
        success: true,
        message: "User details saved successfully",
        user: saveUser[0]
    }, {status: 200})
  }

  catch (error) {
    return NextResponse.json({
        success: false,
        message: "Failed to create a user",
        error
    }, {status: 500})
  }
}
