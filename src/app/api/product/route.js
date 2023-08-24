import { NextResponse } from "next/server";

//GET method
export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  return NextResponse.json({ msg: id });
}
//POST method
export async function POST(req, res) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const origin = searchParams.get("origin");

  return NextResponse.json({ id: id, name: name, origin: origin });
}
