import { useSelector } from "react-redux";
import { selectorOneProduct } from "../../redux/products/selectors";
import styles from "./ProductReviews.module.css";

const ProductReviews = () => {
  const product = useSelector(selectorOneProduct);

  return (
    <div className={styles.reviews}>
      <ul>
        {product.reviews.map((item, index) => (
          <li key={index}>
            <div className={styles.reviewer}>
              <p className={styles.initial}>
                {
                  item.reviewer_name[0].toUpperCase()
                }
              </p>
              <div>
                <p style={{marginBottom:10}}>{item.reviewer_name}</p>
                <p>
                  {[...Array(item.reviewer_rating)].map((_, i) => (
                    <img key={i} src="../../../star.svg" width="20" height="20" alt="star" />
                  ))}
                </p>
              </div>
            </div>
            <p className={styles.comment}>{item.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;
