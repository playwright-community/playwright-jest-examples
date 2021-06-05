import Head from "next/head";
import styles from "../styles/Home.module.css";
import App from "../components/App";
import { useEffect, useState } from "react";

export default function Home() {
  const [helloEndpointData, setHelloEndpointData] = useState<unknown>(null);
  useEffect(() => {
    // this is just for illustrative purposes, it's not a good way to handle fetching
    async function fetchData() {
      const json = (await fetch("/api/hello")).json();
      return json;
    }
    fetchData().then(setHelloEndpointData);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.title}>
          <App/>
        </div>

        <p>debug: NODE_ENV = {process.env.NODE_ENV}</p>

        <p>api response: <code>{JSON.stringify(helloEndpointData, null, 4)}</code></p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
