import React from "react";
import styles from "@/styles/course.module.css";

export default function Course({ course }) {
    const { Title, Content, image } = course;
    return (
        <section
        className={styles.course}
        >
            <div
            className={`container ${styles.grid}`}
            >
                <div>
                    <h2>{Title}</h2>
                    <p>{Content}</p>
                </div>
            </div>
        </section>
    );
}
