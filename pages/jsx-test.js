// pages/index.js
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ billionaires }) {
  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
      number,
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Billionaries List</h1>
      <div className={styles.grid}>
        {billionaires.map((billionaire, index) => (
          <div key={billionaire.id} className={styles.card}>
            <img
              src={billionaire.squareImage}
              alt={billionaire.name}
              className={styles.image}
            />
            <div className={styles.name}>{billionaire.name}</div>
            <div className={styles.netWorth}>
              ${formatNumber(billionaire.netWorth)} Billion
            </div>
            <Link href={`/person/${billionaire.id}`}>
              <a>more..</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://billions-api.nomadcoders.workers.dev/");
  const billionaires = await res.json();

  return {
    props: {
      billionaires,
    },
  };
}
