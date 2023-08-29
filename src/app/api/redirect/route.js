import { redirect } from "next/navigation";

//GET method
export async function GET(req, res) {
  redirect("/");
}