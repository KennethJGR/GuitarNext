import React from "react";
import Layout from "@/components/layout";
import Guitars_list from "@/components/guitars_list";
import styles from "@/styles/grid.module.css";

export default function Store({ guitars }) {
    return (
        <Layout title="Store" description="This is the store page">
            <main className="container">
                <h1 className="heading">Our Collection</h1>

                <div
                className={styles.grid}
                >
                    {guitars.map((guitar) => (
                        <Guitars_list key={guitar.id} guitar={guitar.attributes} />
                    ))}
                </div>
            </main>
        </Layout>
    );
}

export async function getStaticProps() {
    const result = await fetch(`${process.env.API_URL}/guitars?populate=image`);

    const { data: guitars } = await result.json();

    return {
        props: {
            guitars,
        },
    };
}
/* 
export async function getServerSideProps() {
    const result = await fetch(`${process.env.API_URL}/guitars?populate=image`);

    const { data: guitars } = await result.json();

    return {
        props: {
            guitars,
        },
    };
}
 */
