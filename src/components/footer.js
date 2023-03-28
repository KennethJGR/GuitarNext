import React from "react";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <footer
    className={styles.footer}
    >
      <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Home
          </Link>
          <Link
            href="/us"
            className={router.pathname === "/us" ? styles.active : ""}
          >
            Us
          </Link>
          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
          <Link
            href="/store"
            className={router.pathname === "/store" ? styles.active : ""}
          >
            Store
          </Link>
        </nav>
        <p>
          &copy; {new Date().getFullYear()} GuitarRemix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
