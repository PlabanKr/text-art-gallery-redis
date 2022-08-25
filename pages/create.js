import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Create.module.css';

export default function Create() {
    return (
        <div className={`${styles.container} ${styles.createBody}`}>
            <Head>
                <title>Create Text Art</title>
                <meta name="description" content="Create page of Text App Gallery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <section>
                <textarea name="art" id="art" cols="50" rows="25" className={styles.canvas}></textarea>
            </section>

            <section className={styles.formContainer}>
                <form className={styles.form}>
                    <label htmlFor="artName" className={`${styles.formElement}`}>Art&apos;s Information</label>
                    <input type="text" name="artName" id="artName" placeholder="Name of The Art" className={`${styles.formElement}`} />
                    <label htmlFor="userName" className={`${styles.formElement}`}>Publisher&apos;s Information</label>
                    <input type="text" name="userName" id="userName" placeholder="User Name" className={`${styles.formElement}`} />
                    <button className={`${styles.formElement}`}>Publish</button>
                </form>
            </section>
        </div>
    );
}