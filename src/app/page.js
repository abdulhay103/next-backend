import { cookies } from "next/headers";
import Link from "next/link";
import Button from "./components/Button";

export default function page() {
  function setCookie() {
    cookies().set({
      name: "Theme",
      value: "Dark",
      path: "/",
      httpOnly: true,
    });
  }
  return (
    <main>
      <h1>Set the cookie by cliking the button</h1>
      <Button handler={setCookie}>Set Cookie</Button>
      {/* <button onClick={() => setCookie()}>Set Cookie</button> */}
    </main>
  );
}
