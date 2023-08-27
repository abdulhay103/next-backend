import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/product")) {
    const reqHeader = new Headers(req.headers);
    let token = reqHeader.get("token");
    if (token === "123-ABC") {
      reqHeader.set("Brand", "Samsung");
      reqHeader.set("Origin", "Vietnum");
      return NextResponse.next({
        request: {
          headers: reqHeader,
        },
      });
    } else {
      return NextResponse.json({}, { status: 401 });
    }
  } else if (req.nextUrl.pathname.startsWith("/profile")) {
    console.log("I'm Profile middleware");
  }
}
