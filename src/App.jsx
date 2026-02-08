import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";


const HomePage = lazy(() => import("./pages/HomePage"));
const CatologPage = lazy(() => import("./pages/CatologPage"));

function App() {
  return (
    <>
      <Header/>
      <Suspense>
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/catalog" element={<CatologPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
