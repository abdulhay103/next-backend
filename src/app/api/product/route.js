import { NextResponse } from "next/server";
import { headers } from "next/headers";

//GET method
export async function GET(req, res) {
  const headerList = headers();
  let productName = headerList.get("Brand");
  let productOrigin = headerList.get("Origin");

  return NextResponse.json({
    ProductName: productName,
    productOrigin: productOrigin,
  });
}
