import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Guilherme from "./pages/candidatos/guilherme";
import Rodrigo from "./pages/candidatos/rodrigo";
import Ezio from "./pages/candidatos/ezio";
import Margareth from "./pages/candidatos/margareth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="candidatos/guilherme" element={<Guilherme />} />
          <Route path="candidatos/rodrigo" element={<Rodrigo />} />
          <Route path="candidatos/ezio" element={<Ezio />} />
          <Route path="candidatos/margareth" element={<Margareth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
