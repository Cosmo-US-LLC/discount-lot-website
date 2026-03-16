import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
