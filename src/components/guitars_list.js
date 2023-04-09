import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/guitars.module.css";

export default function Guitars_list({ guitar }) {
    const { description, name, price, image, url } = guitar;

    return (
        <div className={styles.guitar}>
            <Image
                src={image.data.attributes.formats.medium.url}
                alt={`guitar ${name}`}
                width={500}
                height={500}
            />
            <div className={styles.content}>
                <h2>{name}</h2>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>${price}</p>
                <Link className={styles.link} href={`/guitars/${url}`}>
                    View Guitar
                </Link>
            </div>
        </div>
    );
}
