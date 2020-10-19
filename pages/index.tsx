/* eslint-disable no-underscore-dangle */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from "../styles/Home.module.sass";
import { getUserList } from "../services/githubApi";

const Home: React.FC = () => {
  React.useEffect(() => {
    const fetchUsers = async () => {
      const users = await (await getUserList()).json();
      console.log(users);
    };
    fetchUsers();
  }, []);

  return (
    <div className={styles.home}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.main__container}>
          <img src="git.svg" className={styles.main__logo} alt="git-logo" />
          <h1 className={styles.main__title}>GitSearch</h1>
          <input className={styles.main__search} placeholder="Pesquisar..." />
        </div>
        <div className={styles.main__button__container}>
          <button
            type="button"
            className={`${styles.main__button} ${styles.main__button__see_all}`}
          >
            <Link href="/users">Ver todos</Link>
          </button>
          <button
            type="button"
            className={`${styles.main__button} ${styles.main__button__search}`}
          >
            <Link href="/users"> Buscar</Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
