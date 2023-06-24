import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route to="/post/:id"/> */}
      </Routes>
    </div>
  );
}

export default App;
