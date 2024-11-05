import { getSortedPostsData, getAllCategories } from "../lib/posts";
import Layout from "../components/Layout";
import Link from "next/link";
import Date from "../components/Date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const categories = getAllCategories();
  return {
    props: {
      allPostsData,
      categories,
    },
  };
}

export default function Home({ allPostsData, categories }) {
  return (
    <Layout categories={categories}>
      <div className="mt-8">
        {allPostsData.map(({ id, date, title }) => (
          <div key={id} className="mb-6">
            <a
              href={`/posts/${id}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {title}
            </a>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
