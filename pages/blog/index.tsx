import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllPosts } from "../../lib/api";
import { ROUTES } from "../../lib/routes";

const Blog: NextPage<{posts: any[]}> = ({posts}) => {
  const router = useRouter()
  
  return (
    <>
      <ul>
        {posts.map((x, i) => (
          <li key={i}>
            <Link as={ROUTES.blogPost(x.slug)} href={ROUTES.blogPost("[slug]")}>
              <a>{x.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const posts =  getAllPosts(["title", "slug"]);
  return {props: {posts, title: 'Blog'}}
}

export default Blog;
