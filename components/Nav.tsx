"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isThoughts = pathname.startsWith("/thoughts");

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand">DONOFR.IO</Link>

        <nav className="nav-links">
          <Link href="/" className={!isThoughts ? "active" : ""}>Home</Link>
          <a href="/#about">About Us</a>
          <a href="/#services">Services</a>
          <Link href="/thoughts" className={isThoughts ? "active" : ""}>Thoughts</Link>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="nav-icons">
          <Link href="/thoughts" className="nav-icon search-icon" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="16.65" y1="16.65" x2="21" y2="21"></line>
            </svg>
          </Link>
          <button className="nav-icon menu-icon" type="button" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
