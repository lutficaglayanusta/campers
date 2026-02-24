import { useSelector } from "react-redux"
import { selectorOneProduct } from "../../redux/products/selectors"


const ProductReviews = () => {

  const product = useSelector(selectorOneProduct);

  console.log(product)

  return (
    <div>
      <ul>
        {
          product.reviews.map((item, index) => (
            <li key={index}>
              <p>
                {item.reviewer_name}
              </p>
              <p>
                {
                  item.reviewer_rating
                }
              </p>
              <p>{item.comment}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductReviews
