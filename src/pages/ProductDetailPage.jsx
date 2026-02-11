import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../redux/products/operations";
import CatalogDetailSection from "../components/CatalogDetailSection/CatalogDetailSection";


const ProductDetailPage = () => {
    const dispatch = useDispatch();


  const { id } = useParams();

    useEffect(() => {
        dispatch(fetchOneProduct(id));
    }, [dispatch, id])

    
    
  return (
    <div>
      <CatalogDetailSection />
    </div>
  )
}

export default ProductDetailPage
