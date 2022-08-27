import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import styles from '../styles/Create.module.css';

export default function Create() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        console.log(formData);
        const res = await fetch("/api/art", {
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const result = await res.json();
        // console.log(result);
        router.push("/");
    }

    return (
        <div className={`${styles.container} ${styles.createBody}`}>
            <Head>
                <title>Create Text Art</title>
                <meta name="description" content="Create page of Text App Gallery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <section className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <textarea name="art" id="art" cols="50" rows="25" className={styles.canvas}>
                    </textarea>
                    <label htmlFor="artName" className={`${styles.formElement}`}>Art&apos;s Information</label>
                    <input type="text" name="artName" id="artName" placeholder="Name of The Art" className={`${styles.formElement}`} />
                    <label htmlFor="userName" className={`${styles.formElement}`}>Publisher&apos;s Information</label>
                    <input type="text" name="author" id="userName" placeholder="User Name" className={`${styles.formElement}`} />
                    <button className={`${styles.formElement}`}>Publish</button>
                </form>
            </section>
        </div>
    );
}