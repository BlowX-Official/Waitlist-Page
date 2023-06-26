import Head from "next/head";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>TBT</title>
        <meta
          name="description"
          content="Experience Blockchain , A.I and the Metaverse in one Place - be the first to experience it by joining our waitlist."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tbt-logo.png" />
      </Head>

      <div className="w-full flex flex-col">
        <Hero />
      </div>
    </>
  );
}
