import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Guitars_list({ guitar }) {
    const { description, name, price, image, url } = guitar;

    return (
        <div>
            <Image
                src={image.data.attributes.formats.medium.url}
                alt={`guitar ${name}`}
                width={500}
                height={500}
            />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>${price}</p>
                <Link href={`/guitars/${url}`}>View Guitar</Link>
            </div>
        </div>
    );
}
