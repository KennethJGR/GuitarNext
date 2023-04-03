import Layout from "@/components/layout";
import Image from "next/image";
import styles from "@/styles/us.module.css";

const Us = () => {
    return (
        <Layout title="Us" description="This is the us page">
            <main className="container">
                <h1 className="heading">Us</h1>
                <div className={styles.content}>
                    <Image
                        src="/img/us.jpg"
                        width={1000}
                        height={800}
                        alt="Picture in us"
                    />

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Blanditiis repellat ipsam consequatur, molestias, qui et suscipit
                            incidunt assumenda architecto aliquam reiciendis repudiandae atque
                            voluptate voluptatem quia, nostrum voluptates libero numquam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
                            quae quod, voluptate, quia, voluptas quibusdam voluptatem quidem,
                            quos nemo dolorum quas. Quisquam, quod, voluptas, quibusdam, quae,
                            quidem voluptatem voluptate quia.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Us;
