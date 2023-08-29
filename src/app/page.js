import Link from "next/link";

export default function page() {
  return (
    <main>
      <h1>Set the cookie by cliking the button</h1>
      <Link className="bg-sky-100 rounded px-4 py-2" href="#">
        Set Cookie
      </Link>
    </main>
  );
}
