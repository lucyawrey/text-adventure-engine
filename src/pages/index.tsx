import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";
import Terminal from "../components/Terminal";
import { TerminalModel } from "../models/TerminalModel";

const terminal = new TerminalModel();

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Text Adventure Engine</title>
        <meta name="description" content="The engine of your text-based worlds." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Text Adventure Engine
        </h1>

        <Terminal model={terminal} />
      </main>

    <Footer />
    </div>
  )
}

export default Home;
