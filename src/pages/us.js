import Link from "next/link";
import Layout from "@/components/layout";

const Us = () => {
    return (
        <Layout
        title="Us"
        description="This is the us page"
        >
            us
            <Link href="/"> Home </Link>
        </Layout>
    );
};

export default Us;
