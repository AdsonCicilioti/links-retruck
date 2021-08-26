import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import dataLinks from "../constant/data"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Links RETRUCK</title>
        <meta name="description" content="Confira nossos links." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Image
            src="/logo-retruck-h.png"
            alt="Logo RETRUCK"
            width={256}
            height={84}
          />
          <span className={styles["sr-only"]}>RETRUCK</span>
        </h1>
        <p className={styles.description}>
          Confira abaixo nossos principais links.
        </p>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {dataLinks &&
            dataLinks.map((link, i, links) => (
              <a
                key={i}
                href={link.url}
                className={styles.card}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <Image
                    src={link.icon}
                    width={32}
                    height={32}
                    alt={`${link.title}`}
                  />
                </span>
                <h2>{link.title}</h2>
              </a>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://adsonagencia.com/?ref=linksretruck"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por{" "}
          <span className={styles.logo}>
            <Image
              src="/logo_adsonagencia_site.png"
              alt="adsonagencia.com"
              width={123}
              height={15}
            />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Home
