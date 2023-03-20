import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/logo.png";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Image src={logo} alt="GuitarNext" width={200} height={200} />

                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/us">Us</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/store">Store</Link>
                </nav>
            </div>
        </header>
    );
}
