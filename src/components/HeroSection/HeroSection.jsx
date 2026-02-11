import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className="container position-container">
        <h1 className={styles.heading}>Campers of your dreams</h1>
        <p className={styles.info}>You can find everything you want in our catalog</p>
        <Link to="/catalog" className={styles.button}>View Now</Link>
      </div>
    </section>
  );
};

export default HeroSection;
