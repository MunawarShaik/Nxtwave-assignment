import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddResource from "./components/AddResource";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-resource" element={<AddResource />} />
      </Routes>
    </>
  );
};

export default App;
