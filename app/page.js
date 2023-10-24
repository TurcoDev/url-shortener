'use client'
import Head from 'next/head'
import styles from './styles/Home.module.css'
import { useRef, useState } from 'react';

export default function Home() {
  const inputRef = useRef();
  const [shortURL, setShortURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = inputRef.current.value;
    console.log(url);

    fetch('/api/shortUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({url}),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setShortURL(data.shortUrl)
      });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>URL Shortener</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          URL Shortener
        </h1>

        <p className={styles.description}>
          Acorta tus URLs aquí
        </p>

        <div className={styles.grid}>
          <form className={styles.card} onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" className={styles.input} placeholder="URL" />
            <button className={styles.button}>Acorta</button>
            <span className={styles.input}>{shortURL}</span>
          </form>
        </div>

      </main>
    </div>
  )
}