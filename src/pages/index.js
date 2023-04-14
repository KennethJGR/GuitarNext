import Layout from "@/components/layout";
import Guitars_list from "@/components/guitars_list";
import Post from "@/components/post";
import styles from "@/styles/grid.module.css";
import Course from "@/components/course";

export default function Home({ guitars, posts, course }) {
  return (
    <>
      <Layout description="This is the home page">
        <main className="container">
          <h1 className="heading">Our Collection</h1>

          <div className={styles.grid}>
            {guitars?.map((guitar) => (
              <Guitars_list key={guitar.id} guitar={guitar.attributes} />
            ))}
          </div>
        </main>
        <Course course={course.attributes} />

        <section className="container">
          <h1 className="heading">Blog</h1>

          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`;
  const urlPosts = `${process.env.API_URL}/posts?populate=image`;
  const urlCourse = `${process.env.API_URL}/course?populate=image`;

  const [resGuitars, resPosts, resCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse),
  ]);

  const [{ data: guitars }, { data: posts }, { data: course }] =
    await Promise.all([resGuitars.json(), resPosts.json(), resCourse.json()]);

  return {
    props: {
      guitars,
      posts,
      course,
    },
  };
}
