import React from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../../styles/blog.module.css";


export default function BlogPosts({ post }) {
    const { Title, Content, image, publishedAt } = post[0].attributes;
    console.log(post[0].attributes);

    return (
        <Layout>
            <article>
                <Image
                    src={image?.data.attributes.formats.medium.url}
                    alt={Title}
                    width={500}
                    height={500}
                />
                <div className={styles.content}>
                    <h3>{Title}</h3>
                    <p className={styles.date}>{(publishedAt)}</p>
                    <p className={styles.resume}>{Content}</p>
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
