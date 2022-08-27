import Head from 'next/head';
import { useEffect,useState } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [arts, setArts] = useState([]);

  const searchAllArts = async () => {
    const res = await fetch("/api/getAllArts");
    const result = await res.json();
    setArts(result["arts"]);
    console.log(result["arts"]);
  }

  useEffect(() => {
    
    fetch("/api/createIndex")
    searchAllArts();
    
    console.log(arts)
  },[])
  

  return (
    <div>
      <Head>
        <title>Text Art Gallery</title>
        <meta name="description" content="Text App Gallery. Create, share your text art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <div className={styles.cardContainer}>
          {
            arts.map((art, index) => {
              return <Card art={art["art"]} artName={art["artName"]} author={art["author"]} key={index} />
            })   
          }
        </div>
      </div>
    </div>
  );
}
