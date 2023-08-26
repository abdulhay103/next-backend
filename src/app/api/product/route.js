import { NextResponse } from "next/server";
import { headers } from "next/headers";

//POST method
export async function POST(req, res) {
  const allHeaders = headers();
  let token = allHeaders.get("Token");
  let connection = allHeaders.get("Connection");
  return NextResponse.json({ Token: token, Connection: connection });
}
