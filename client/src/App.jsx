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
import PrivateRoute from "./context/privateRoute";
import ViewLand from "./lands/viewLand";
import Home from "./Home";
function App() {
  const location = useLocation();

  const hideLayoutRoutes = ["/update","/register","/Login"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);
  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <ToastContainerComponent />
      <Routes>
        <Route
          path="/update"
          element={
            <PrivateRoute>
              <FieldType />
            </PrivateRoute>
          }
        />
        <Route
          path="/cropsuggest"
          element={
            <PrivateRoute>
              <CropSuggestion />
            </PrivateRoute>
            // <CropSuggestion/>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/my-lands" element={<ViewLand />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* <Route path="newland" element={<AddLand />} /> */}
        {/* <Route path="user" element={<Profile />} /> */}
      </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default App;