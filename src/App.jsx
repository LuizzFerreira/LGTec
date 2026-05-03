import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTopButton />
    </MainLayout>
  );
}

export default App;
