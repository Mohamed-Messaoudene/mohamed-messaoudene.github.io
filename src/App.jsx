import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
