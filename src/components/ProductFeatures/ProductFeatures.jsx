import { useSelector } from "react-redux";
import { selectorOneProduct } from "../../redux/products/selectors";
import styles from "./ProductFeatures.module.css";

const ProductFeatures = () => {
  const product = useSelector(selectorOneProduct);

  return (
    product && (
      <div className={styles.featuresContainer}>
        <ul className={styles.features}>
          <li>
            <img
              src="../../../diagram.svg"
              width={20}
              height={20}
              alt="diagram"
            />
            {product.transmission}
          </li>
          <li>
            <img
              src="../../../public/fuel-pump.svg"
              width={20}
              height={20}
              alt="fuel pump"
            />
            {product.engine}
          </li>
          <li>
            {product.kitchen && (
              <img
                src="../../../public/cup-hot.svg"
                width={20}
                height={20}
                alt="kitchen"
              />
            )}
            {product.kitchen && "Kitchen"}
          </li>
          <li>
            {product.AC && (
              <img
                src="../../../public/wind.svg"
                width={20}
                height={20}
                alt="wind"
              />
            )}
            {product.AC && "AC"}
          </li>
          <li>
            {product.radio && (
              <img
                src={"../../../ui-radios.svg"}
                width={20}
                height={20}
                alt="radio"
              />
            )}

            {product.radio && "Radio"}
          </li>
        </ul>
        <h3 className={styles.heading}>Vehicle Details</h3>
        <div className={styles.details}>
          <ul>
            <li>Form</li>
            <li>Length</li>
            <li>Width</li>
            <li>Height</li>
            <li>Tank</li>
            <li>Consumption</li>
          </ul>
          <ul>
            <li>{product.form[0].toUpperCase()  + product.form.substr(1,product.form.length) }</li>
            <li>{product.length}</li>
            <li>{product.width}</li>
            <li>{product.height}</li>
            <li>{product.tank}</li>
            <li>{product.consumption}</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default ProductFeatures;
