import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Component/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { SinglePost } from "./Pages/SinglePost/SinglePost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:id" element={<SinglePost/>}/>
      </Routes>
    </div>
  );
}

export default App;
