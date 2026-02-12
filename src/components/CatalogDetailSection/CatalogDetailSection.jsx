import { useSelector } from "react-redux";
import styles from "./CatalogDetailSection.module.css";
import { selectorOneProduct } from "../../redux/products/selectors";
import { NavLink, Outlet } from "react-router-dom";

const CatalogDetailSection = () => {

    const product = useSelector(selectorOneProduct)

    console.log(product)

    return (
      product && (
      <section>
          <div className="container">
              <h2 className={styles.heading}>{product.name}</h2> 
              <ul className={styles.info}>
                  <li>
                      {product.rating}({product.reviews.length} Reviews)
                  </li>
                  <li>
                      {product.location}
                  </li>
                    </ul>
                    <p className={styles.price}>£{product.price}</p>
                    <ul className={styles.images}>
                        {
                            product.gallery.map((item, index) => (
                                <li  key={index}>
                                    <img className={styles.image} src={item.thumb} width={292} height={312} alt="" />
                                </li>
                            ))
                        }
                    </ul>
                    <p className={styles.description}>
                        {product.description}
                    </p>
                    <ul className={styles.nav}>
                        <li>
                            <NavLink to="features">Features</NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews">Reviews</NavLink>
                        </li>
                    </ul>
                    <Outlet />
          </div>
          
            </section>
      )
  )
}

export default CatalogDetailSection
