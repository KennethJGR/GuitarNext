import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/logo.png";
import styles from "@/styles/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navigation}`}>
                <Image src={logo} alt="GuitarNext" width={300} height={40} />

                <nav >
                    <Link href="/">Home</Link>
                    <Link href="/us">Us</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/store">Store</Link>
                </nav>
            </div>
        </header>
    );
}
