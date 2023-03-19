import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo.png";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Image src={logo} alt="GuitarNext" width={200} height={200} />
            </div>
        </header>
    );
}
