import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { ReactElement as map } from '/map-section.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reno High Schedule Mapper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Reno High Schedule Mapper
        </h1>
        <map/>
      </main>

    </div>
  );
}
