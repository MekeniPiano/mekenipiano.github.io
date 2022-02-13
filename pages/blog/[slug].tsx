import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import Link from "next/link";
import { ROUTES } from "../../lib/routes";

export default function Post({ post, morePosts, preview }: any) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </article>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
      title: post.title
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
