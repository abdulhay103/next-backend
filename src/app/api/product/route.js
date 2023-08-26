import { NextResponse } from "next/server";

//POST method
export async function POST(req, res) {
  return NextResponse.json(
    [
      { name: "abdul Hay", age: 28, color: "Black" },
      { name: "abdul Hay", age: 28, color: "Black" },
      { name: "abdul Hay", age: 28, color: "Black" },
      { name: "abdul Hay", age: 28, color: "Black" },
    ],
    { status: 202 }
  );
}
