import { NextResponse } from "next/server";
import { headers } from "next/headers";

//GET method
export async function GET(req, res) {
  const headerList = headers();
  let Bearer = headerList.get("bearer");

  return NextResponse.json({
    Bearer: Bearer,
  });
}
