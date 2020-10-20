/* eslint-disable no-underscore-dangle */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.sass";

const Home: React.FC = () => {
  const inputRef = React.useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const input = inputRef.current as HTMLInputElement;
    if (input.value) window.localStorage.setItem("search", input.value);
  };

  return (
    <div className={styles.home}>
      <Head>
        <title>GitHub App</title>
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
          <input
            className={styles.main__search}
            name="search"
            ref={inputRef}
            placeholder="Pesquisar..."
          />
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
            onClick={(e) => onSubmit(e)}
            className={`${styles.main__button} ${styles.main__button__search}`}
          >
            <Link href="/users"> Buscar</Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default React.memo(Home);
