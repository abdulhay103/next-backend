import { NextResponse } from "next/server";

//GET method
export async function GET(req, res) {
  return NextResponse.json({ msg: "Hello I'm from GET methods." });
}
//POST method
export async function POST(req, res) {
  return NextResponse.json({ msg: "Hello I'm from POST methods." });
}
//PUT method
export async function PUT(req, res) {
  return NextResponse.json({ msg: "Hello I'm from PUT methods." });
}
//DELETE method
export async function DELETE(req, res) {
  return NextResponse.json({ msg: "Hello I'm from DELETE methods." });
}
//PATCH method
export async function PATCH(req, res) {
  return NextResponse.json({ msg: "Hello I'm from PATCH methods." });
}
