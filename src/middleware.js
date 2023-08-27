import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/product")) {
    const reqHeader = new Headers(req.headers);
    let token = reqHeader.get("token");
    if (token === "123-ABC") {
      const response = NextResponse.next();
      response.headers.set(
        "Set-Cookie",
        "session=Response Cookie; path=/; httpOnly"
      );
      return response;
    } else {
      return NextResponse.json({}, { status: 401 });
    }
  } else if (req.nextUrl.pathname.startsWith("/profile")) {
    console.log("I'm Profile middleware");
  }
}
