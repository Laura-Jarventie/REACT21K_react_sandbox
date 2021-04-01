import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Main_router from "./Components/Main_router";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Main_router />
      <Footer />
    </Router>
  );
};

export default App;
