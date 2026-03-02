import { useSelector, useDispatch } from "react-redux";
import styles from "./CatalogSection.module.css";
import { selectorProducts } from "../../redux/products/selectors";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CatalogSection = () => {

  const [part, setPart] = useState(0);
  const dispatch = useDispatch();

  const products = useSelector(selectorProducts);
  const favorites = useSelector(state => state.favorites.items);

  useEffect(() => {
    setPart(0);
  }, [products]);

  const newProducts = products.slice(0, part + 4);

  const handleToggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      dispatch(removeFavorite(productId));
    } else {
      dispatch(addFavorite(productId));
    }
  };


  const handleClick = (e) => {
    setPart(part + 4);
    if(part + 4 >= products.length) {
      e.target.style.display="none";
      return;
    }
  }

  return (
    <div className={styles.catalogSection}>
      <ul>
        {newProducts.map((product) => (
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
                <div className={styles.priceContainer}>
                  <p>€{parseFloat(product.price).toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: false,
            })}</p>
                  <button
                    className={styles.heartBtn}
                    onClick={() => handleToggleFavorite(product.id)}
                  >
                    {favorites.includes(product.id) ? "♥" : "♡"}
                  </button>
                </div>
              </div>
              <div className={styles.subHeader}>
                <img src="../../../star.svg" alt="" />
                <p>
                  {product.rating}({product.reviews.length} Reviews)
                </p>
                <img src="../../../map.svg" alt="" />
                <p>{product.location}</p>
              </div>
              <p className={styles.description}>{product.description.slice(0, 70)}...</p>
              <ul className={styles.features}>
                <li>
                  <img src="../../../diagram.svg" width={20} height={20} alt="diagram" />
                  {product.transmission[0].toUpperCase() + product.transmission.slice(1)}
                </li>
                <li>
                  <img src="../../../fuel-pump.svg" width={20} height={20} alt="fuel pump" />
                  {product.engine[0].toUpperCase() + product.engine.slice(1)}
                </li>
                {product.kitchen && (
                  <li>
                    <img src="../../../cup-hot.svg" width={20} height={20} alt="kitchen"/>
                    Kitchen
                  </li>
                )}
                {product.AC && (
                  <li>
                    <img src="../../../wind.svg" width={20} height={20} alt="wind"/>
                    AC
                  </li>
                )}
              </ul>
              <Link className={styles.link} to={`/catalog/${product.id}/features`}>Show more</Link>
            </div>
          </li>
        ))}
      </ul>
      {products.length > 4 && newProducts.length < products.length && <button className={styles.load} onClick={handleClick}>Load More</button>}
    </div>
  );
};

export default CatalogSection;
