import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
   {/* <>
   Home
   </> */}
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Home'
    }
  }
}

export default Home
