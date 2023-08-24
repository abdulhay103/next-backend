import Link from "next/link";

const Header = () => {
  return (
    <header className=" w-full fixed shadow bg-blue-100">
      <nav className="flex justify-between container mx-auto py-3">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div className=" flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
