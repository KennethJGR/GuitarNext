import React from "react";
import Layout from "@/components/layout";
import Guitars_list from "@/components/guitars_list";

export default function Store() {
    return (
        <Layout title="Store" description="This is the store page">
            <main className="container">
                <h1 className="heading">Our Collection</h1>

                <Guitars_list />
            </main>
        </Layout>
    );
}
