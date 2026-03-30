import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Kentucky from "./pages/states/Kentucky.jsx";
import Layout from "./components/layouts";
import Arizona from "./pages/states/Arizona.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/states/arizona" element={<Arizona />} />
        <Route path="/states/kentucky" element={<Kentucky />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
