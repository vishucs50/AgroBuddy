import "./index.css";
import CropSuggestion from "./SoilSuggestion/cropSuggestion";
import FieldType from "./SoilSuggestion/FieldType";
import ToastContainerComponent from "./services/submission";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { Routes, Route} from "react-router";
import Register from "./userRegisteration/register";
import { useLocation } from "react-router";
import LoginPage from "./userRegisteration/login";
function App() {
  const location = useLocation();

  const hideLayoutRoutes = ["/","/register","/Login"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  return (
    <>
      {!shouldHideLayout && <Navbar />} 
        <ToastContainerComponent />
        <Routes>
          <Route path="/" element={<FieldType />} />
          <Route path="/cropsuggest" element={<CropSuggestion />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;
