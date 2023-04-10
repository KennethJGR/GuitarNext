import React from "react";
import Layout from "@/components/layout";
import Link from "next/link";

export default function page404() {
    return (
        <Layout>
            <div title="404 Page not found">
                <h1 className="error">404 Page not found</h1>
                <Link href="/"
                className="errorLink"
                >Go back</Link>
            </div>
        </Layout>
    );
}
