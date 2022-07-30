import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route exact path="/" component={Home} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
