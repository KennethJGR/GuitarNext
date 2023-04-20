import Layout from "@/components/layout";
import React from "react";
import styles from "@/styles/cart.module.css";
import Image from "next/image";

export default function Cart({ cart }) {
    return (
        <Layout title="Cart">
            <main className="container">
                <h1 className="heading">Cart</h1>
                <div className={styles.content}>
                    <div className={styles.cart}>
                        <h2>Product Name</h2>

                        {cart.length === 0
                            ? "Your cart is empty"
                            : cart.map((item) => (
                                <div key={item.id} className={styles.product}>
                                    <div>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div>
                                        <p className={styles.name}>
                                            Product Name: <span>{item.name}</span>
                                        </p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p className={styles.price}>
                                            Price: <span>${item.price}</span>
                                        </p>
                                        <p className={styles.subtotal}>
                                            Subtotal: <span>${item.quantity * item.price}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
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
