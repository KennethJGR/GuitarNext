import React from "react";

export default function Product() {
    return (
        <div>
            <h1>Product: </h1>
        </div>
    );
}

export async function getServerSideProps({ query: { url } }) {
    console.log(url);

    const result = await fetch(
        `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image}`
    );

    const data = await result.json();

    console.log(data);

    return {
        props: {},
    };
}
