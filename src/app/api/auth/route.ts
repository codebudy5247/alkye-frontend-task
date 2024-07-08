import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const loginRes = await axios.post(
      "https://untitled-twkmuar27a-uc.a.run.app/api/login/",
      {
        username: body.username,
        password: body.password,
      }
    );
    const cookieOptions = {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60,
    };
    cookies().set("user", JSON.stringify(loginRes.data), cookieOptions);
    return NextResponse.json(loginRes.data);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
