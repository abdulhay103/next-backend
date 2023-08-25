import { NextResponse } from "next/server";

//POST method
export async function POST(req, res) {
  const reqBody = await req.json();
  let id = reqBody["id"];
  let name = reqBody["name"];
  let country = reqBody["country"];
  let color = reqBody["color"];

  return NextResponse.json({
    id: id,
    name: name,
    country: country,
    color: color,
  });
}
