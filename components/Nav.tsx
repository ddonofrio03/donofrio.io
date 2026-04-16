"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        DONOFR<span>.IO</span>
      </Link>
      <ul className="nav-links">
        <li><a href="/#about">About</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#team">Team</a></li>
        <li>
          <Link href="/thoughts" style={pathname.startsWith("/thoughts") ? { color: "var(--black)" } : {}}>
            Thoughts
          </Link>
        </li>
        <li>
          <a href="/#contact" className="nav-cta">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
