import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddResource from "./components/AddResource";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add-resource" element={<AddResource />} />
    </Routes>
  );
};

export default App;
