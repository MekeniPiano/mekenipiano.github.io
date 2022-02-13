import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";

const NoSSRComponent = dynamic(()=> import('../components/chart'), {
    ssr: false
})

const ChartPage: NextPage = () => {
  return (
    <>
      <NoSSRComponent />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Chart",
    },
  };
}

export default ChartPage;
