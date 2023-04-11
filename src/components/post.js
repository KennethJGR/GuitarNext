import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/blog.module.css";
import { formatDate } from "@/utils/helpers";

export default function Post({ post }) {
  const { Title, Content, image, url, publishedAt } = post;
  return (
    <article>
      <Image
        src={image?.data.attributes.formats.medium.url}
        alt={Title}
        width={500}
        height={500}
      />
      <div className={styles.content}>
        <h3>{Title}</h3>
        <p className={styles.date}>{formatDate(publishedAt)}</p>
        <p className={styles.resume}>{Content}</p>
        <Link className={styles.link} href={`/blog/${url}`}>
          Read More
        </Link>
      </div>
    </article>
  );
}
