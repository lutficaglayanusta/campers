import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductFeatures from "./components/ProductFeatures/ProductFeatures";
import ProductReviews from "./components/ProductReviews/ProductReviews";


const HomePage = lazy(() => import("./pages/HomePage"));
const CatologPage = lazy(() => import("./pages/CatologPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));

function App() {
  return (
    <>
      <Header/>
      <Suspense>
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/catalog" element={<CatologPage />} />
          <Route path="/catalog/:id" element={<ProductDetailPage />} >
            <Route path="features" element={<ProductFeatures/>} />
            <Route path="reviews" element={<ProductReviews/>} />
          </Route >
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
