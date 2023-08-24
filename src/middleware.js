import { NextRequest, NextResponse } from "next/server";

export function middleware(NextRequest) {
  if (NextRequest.nextUrl.pathname.startsWith("/product")) {
    console.log("I'm Product middleware");
  } else if (NextRequest.nextUrl.pathname.startsWith("/profile")) {
    console.log("I'm Profile middleware");
  }
}
