import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Properties from "../pages/Properties";
import ContactUs from "../pages/ContactUs";
import "../App/styles/scss/style.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
