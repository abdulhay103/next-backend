import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/headerModify")) {
    const response = NextResponse.next();
    response.headers.set("Bearer", "Authorization");
    return response;
  } else if (req.nextUrl.pathname.startsWith("/profile")) {
    console.log("I'm Profile middleware");
  }
}
