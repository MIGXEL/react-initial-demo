import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About - Miguel</title>
                <meta name="description" content="About page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={inter.className}>
                    Welcome to <a href='https://nextjs.org'>Next.js!</a>
                </h1>
                <div className={styles.grid}>
                    <a
                        href="/"
                        className={styles.card}
                    >
                        <h2 className={inter.className}>
                            Home <span>-&gt;</span>
                        </h2>
                    </a>
                </div>
                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/about.js</code>
                </p>


            </main>
        </>
    )
}
