import React from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../../styles/blog.module.css";
import { formatDate } from "@/utils/helpers";

export default function BlogPosts({ post }) {
    const { Title, Content, image, publishedAt } = post[0].attributes;
    console.log(post[0].attributes);

    return (
        <Layout title={`Blog Post ${Title}`}>
            <article className={`${styles.post} ${styles["mt-3"]}`}>
                <Image
                    src={image?.data.attributes.url}
                    alt={Title}
                    width={1000}
                    height={500}
                />
                <div className={styles.content}>
                    <h3>{Title}</h3>
                    <p className={styles.date}>{formatDate(publishedAt)}</p>
                    <p className={styles.text}>{Content}</p>
                </div>
            </article>
        </Layout>
    );
}

export async function getServerSideProps({ query: { url } }) {
    const result = await fetch(
        `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
    );

    const { data: post } = await result.json();

    return {
        props: {
            post,
        },
    };
}
