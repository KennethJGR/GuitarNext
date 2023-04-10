import React from "react";
import Image from "next/image";
import styles from "../../styles/guitars.module.css";
import Layout from "@/components/layout";

export default function Product({ guitar }) {
    const { name, price, description, image } = guitar[0].attributes;
    console.log(guitar[0].attributes);

    return (
        <Layout
            title={`Guitar ${name}`}
        >
            <div className={styles.guitar}>
                <Image
                    src={image.data.attributes.url}
                    alt={`guitar ${name}`}
                    width={500}
                    height={500}
                />
                <div className={styles.content}>
                    <h2>{name}</h2>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const result = await fetch(`${process.env.API_URL}/guitars`);
    const data = await result.json();
    console.log(data);

    const paths = data.data.map((guitar) => ({
        params: { url: guitar.attributes.url },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { url } }) {
    const result = await fetch(
        `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
    );

    const { data: guitar } = await result.json();

    return {
        props: {
            guitar,
        },
    };
}
/* 
export async function getServerSideProps({ query: { url } }) {
    const result = await fetch(
        `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
    );

    const data = await result.json();

    return {
        props: {
            data,
        },
    };
} */
