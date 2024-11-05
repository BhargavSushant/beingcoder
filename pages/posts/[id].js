import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/D";
import Mermaid from "../../components/Mermaid";
import Layout from "../../components/Layout";
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="prose lg:prose:xl mx-auto mt-8">
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div>
          {/* Check if the content contains Mermaid diagrams and render accordingly */}
          {postData.contentHtml.includes("```mermaid") ? (
            <Mermaid chart={postData.contentHtml} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          )}
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
