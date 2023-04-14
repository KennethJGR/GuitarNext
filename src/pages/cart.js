import Layout from "@/components/layout";
import React from "react";
import styles from "@/styles/cart.module.css";

export default function Cart() {
    return (
        <Layout title="Cart">
            <main className="container">
                <h1 className="heading">Cart</h1>
                <div className={styles.content}>
                    <div className={styles.cart}>
                        <h2>Product Name</h2>
                    </div>

                    <aside className={styles.summary}>
                        <h3>Order Summary</h3>
                        <p>
                            Total: <span>$0.00</span>
                        </p>
                    </aside>
                </div>
            </main>
        </Layout>
    );
}
