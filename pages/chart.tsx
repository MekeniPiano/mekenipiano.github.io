import type { NextPage } from "next";
import dynamic from "next/dynamic";

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
