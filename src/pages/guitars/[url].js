import React from "react";

export default function Product({ data }) {
    console.log(data.data[0].attributes.name);

    const { name, price, description, image } = data.data[0].attributes;

    return (
        <div>
            <h1>
                {name} - {price} - {description} -
            </h1>
        </div>
    );
}

export async function getStaticPaths() {
    const result = await fetch(`${process.env.API_URL}/guitars`);
    const data = await result.json();
    console.log(data);

    const paths = data.data.map((guitar) => ({
        params: { url: guitar.attributes.url },
    }));

    console.log(paths);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { url } }) {
    const result = await fetch(
        `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image}`
    );

    const data = await result.json();

    return {
        props: {
            data,
        },
    };
}
/* 
export async function getServerSideProps({ query: { url } }) {
    const result = await fetch(
        `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image}`
    );

    const data = await result.json();

    return {
        props: {
            data,
        },
    };
} */
