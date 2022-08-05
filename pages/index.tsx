import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>The Fox Hole</h1>

      <div
        className={styles.optionSelectBox}
        role="button"
        onClick={() => router.push(`/stake`)}
      >
        <img src={`/icons/logo.index.png`} alt="drop" />
        <h2 className={styles.selectBoxTitle}>Stake Your Fox!</h2>
        <p className={styles.selectBoxDescription}>
          Introducing, <b>The Fox Hole</b> the official staking vault for the
          Rich Fox Club. Earn 2 <b>RFC.X</b> tokens per day per NFT staked!
        </p>
      </div>
    </div>
  );
};

export default Home;
