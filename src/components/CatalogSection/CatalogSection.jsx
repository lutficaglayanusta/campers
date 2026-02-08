import { useSelector } from "react-redux";
import styles from "./CatalogSection.module.css";
import { selectorProducts } from "../../redux/products/selectors";
import { Link } from "react-router-dom";

const CatalogSection = () => {
  const products = useSelector(selectorProducts);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.gallery[0].original}
              width={292}
              height={320}
              alt=""
            />
            <div>
              <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <div>
                <p>
                  {product.rating}({product.reviews.length} Reviews)
                </p>
                <p>{product.location}</p>
                    </div>
                    <p>{product.description}</p>
                    <ul>
                        <li>{product.transmission}</li>
                        <li>{product.engine}</li>
                        <li>{product.kitchen && "Kitchen"}</li>
                        <li>{product.AC && "AC"}</li>
                    </ul>
                    <Link to={`/product/${product.id}`}>Show more</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogSection;
