import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../pages/Layout";
import "../App/styles/scss/style.scss";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Properties = lazy(() => import("../pages/Properties"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const PropertiesDetails = lazy(() => import("../pages/PropertiesDetails"));
const Terms = lazy(() => import("../pages/Terms"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="properties" element={<Properties />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="terms" element={<Terms />} />
            <Route path="details/:name" element={<PropertiesDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;