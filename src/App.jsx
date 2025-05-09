import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./contexts/theme-context";

// Lazy-loaded pages (dynamically imported for better performance)
const HomePage = lazy(() => import("./pages/HomePage"));
const PropertyDetailsPage = lazy(() => import("./pages/PropertyDetailsPage"));

function App() {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/property/:id",
        element: <PropertyDetailsPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
    {
      basename: "/",
    }
  );

  return (
    <ThemeProvider storageKey="theme">
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
