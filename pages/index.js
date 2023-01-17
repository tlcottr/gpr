import Scene from "@/components/Scene";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader } from "@react-three/drei";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="../GPRFaviconWhite.ico" />
        <title>Greenpoint Runners</title>
        <meta name="title" content="Greenpoint Runners" />
        <meta
          name="description"
          content="Saturday morning runs powered by Bandit"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.greenpointrunners.com/" />
        <meta property="og:title" content="Greenpoint Runners" />
        <meta
          property="og:description"
          content="Saturday morning runs powered by Bandit"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tlcottr/portfolio/blob/1516a5532ac647e7d2556c2afbaefd7c493af2bd/img/GPR_ShareImage.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://raw.githubusercontent.com/tlcottr/portfolio/blob/1516a5532ac647e7d2556c2afbaefd7c493af2bd/img/GPR_ShareImage.jpg"
        />
        <meta property="twitter:title" content="Greenpoint Runners" />
        <meta
          property="twitter:description"
          content="Saturday morning runs powered by Bandit"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/tlcottr/portfolio/blob/1516a5532ac647e7d2556c2afbaefd7c493af2bd/img/GPR_ShareImage.jpg"
        />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
      <Loader />
      <Header />
      <Scene />
      <Footer />
    </div>
  );
}
