import { useSelector } from "react-redux";
import styles from "./CatalogDetailSection.module.css";
import { selectorOneProduct } from "../../redux/products/selectors";

const CatalogDetailSection = () => {

    const product = useSelector(selectorOneProduct)

    return (
      product && (
      <section>
          <div className="container">
              <h2>{product.name}</h2> 
              <ul>
                  <li>
                      {product.rating}({product.reviews.length} Reviews)
                  </li>
                  <li>
                      {product.location}
                  </li>
              </ul>
          </div>
          
            </section>
      )
  )
}

export default CatalogDetailSection
