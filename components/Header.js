// components/Header.js

import Link from "next/link";
import { useRouter } from "next/router";
import { SITE_NAME } from "../config/config";

export default function Header() {
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // Add more items as needed
  ];

  return (
    <header className="header">
      <div className="container py-4 flex items-center justify-between">
        <h1 className="title">
          <Link href="/">{SITE_NAME}</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link ${
                    router.pathname === href ? "nav-link-active" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
