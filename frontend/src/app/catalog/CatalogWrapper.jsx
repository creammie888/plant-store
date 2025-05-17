import { Suspense } from "react";
import CatalogPage from "./CatalogPage";

export default function CatalogWrapper() {
  return (
    <Suspense fallback={<p>Loading catalog...</p>}>
      <CatalogPage />
    </Suspense>
  );
}
