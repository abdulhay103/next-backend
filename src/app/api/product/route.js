import { NextResponse } from "next/server";

//POST method
export async function POST(req, res) {
  const reqBody = await req.formData();
  let id = reqBody.get("id");
  let name = reqBody.get("name");
  let country = reqBody.get("country");

  return NextResponse.json({ id: id, name: name, country: country });
}
