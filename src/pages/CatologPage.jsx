import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchAllProduct } from "../redux/products/operations";
import SideBar from "../components/SideBar/SideBar"
import CatalogSection from "../components/CatalogSection/CatalogSection";


const CatologPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct())
  },[dispatch])

  return (
    <section>
      <div className="container catalog-container">
        <SideBar />
        <CatalogSection/>
      </div>
      
    </section>
  )
}

export default CatologPage
