import MainRoute from "./routes/MainRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="App">
      <MainRoute />
      <ToastContainer />
    </div>
  );
};

export default App;
