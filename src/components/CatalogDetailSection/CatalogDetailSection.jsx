import { useSelector } from "react-redux";
import styles from "./CatalogDetailSection.module.css";
import { selectorOneProduct } from "../../redux/products/selectors";
import { NavLink, Outlet } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";

const CatalogDetailSection = () => {
  const product = useSelector(selectorOneProduct);

  console.log(product);

  return (
    product && (
      <section>
        <div className="container">
          <h2 className={styles.heading}>{product.name}</h2>
          <ul className={styles.info}>
            <li className={styles.rating}>
              <img src="../../../star.svg" alt="star" />
              <p>
                {product.rating}({product.reviews.length} Reviews)
              </p>
            </li>
            <li className={styles.location}>
              <img src="../../../map.svg" alt="map" />
              <p>{product.location}</p>
            </li>
          </ul>
          <p className={styles.price}>
            £
            {parseFloat(product.price).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: false,
            })}
          </p>
          <ul className={styles.images}>
            {product.gallery.map((item, index) => (
              <li key={index}>
                <img
                  className={styles.image}
                  src={item.thumb}
                  width={292}
                  height={312}
                  alt=""
                />
              </li>
            ))}
          </ul>
          <p className={styles.description}>{product.description}</p>
          <ul className={styles.nav}>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to="features">Features</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <div className={styles.content}>
            <Outlet />
            <ContactForm />
          </div>
        </div>
      </section>
    )
  );
};

export default CatalogDetailSection;
