import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../public/img/logo.png";
import styles from "@/styles/header.module.css";

export default function Header() {
    const router = useRouter();
    console.log(router.pathname);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.bar}`}>
                <Link href={"/"}>
                    <Image src={logo} alt="GuitarNext" width={300} height={40} />
                </Link>
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
                        href="/store"
                        className={router.pathname === "/store" ? styles.active : ""}
                    >
                        Store
                    </Link>
                    <Link
                        href="/blog"
                        className={router.pathname === "/blog" ? styles.active : ""}
                    >
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
}
