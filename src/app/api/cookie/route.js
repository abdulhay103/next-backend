import { NextResponse } from "next/server";

//POST method
export async function POST(req, res) {
  let myCookie = req.cookies.get("Theme");
  return NextResponse.json({ Cookie: myCookie });
}