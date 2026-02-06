import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className="container position-container">
        <h1 className={styles.heading}>Campers of your dreams</h1>
        <p className={styles.info}>You can find everything you want in our catalog</p>
        <button className={styles.button}>View Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
