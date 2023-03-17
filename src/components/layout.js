import React from "react";
import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Guitar Next</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Layout</h1>

            {children}
        </>
    );
}
