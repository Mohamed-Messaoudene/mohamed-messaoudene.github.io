import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import HomePage from "./pages/Home";
import RouteLoadingFallback from "./components/RouteLoadingFallback";
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
