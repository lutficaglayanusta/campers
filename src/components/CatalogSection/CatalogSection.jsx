import { useSelector } from "react-redux";
import styles from "./CatalogSection.module.css";
import { selectorProducts } from "../../redux/products/selectors";
import { Link } from "react-router-dom";

const CatalogSection = () => {
  const products = useSelector(selectorProducts);

  return (
    <div className={styles.catalogSection}>
      <ul>
        {products.map((product) => (
          <li className={styles.list} key={product.id}>
            <img
              src={product.gallery[0].original}
              width={292}
              height={320}
              alt=""
              style={{ borderRadius: 10 }}
            />
            <div>
              <div className={styles.header}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <div className={styles.subHeader}>
                <p>
                  {product.rating}({product.reviews.length} Reviews)
                </p>
                <p>{product.location}</p>
              </div>
              <p className={styles.description}>{product.description}</p>
              <ul className={styles.features}>
                <li>
                  <img src="../../../diagram.svg" width={20} height={20} alt="diagram" />
                  {product.transmission}
                </li>
                <li>
                  <img src="../../../public/fuel-pump.svg" width={20} height={20} alt="fuel pump" />
                  {product.engine}
                </li>
                <li>
                  {product.kitchen && <img src="../../../public/cup-hot.svg" width={20} height={20} alt="kitchen"/>}
                  {product.kitchen && "Kitchen"}
                </li>
                <li>
                  {product.AC && <img src="../../../public/wind.svg" width={20} height={20} alt="wind"/>}
                  {product.AC && "AC"}
                </li>
              </ul>
              <Link className={styles.link} to={`/catalog/${product.id}`}>Show more</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogSection;
