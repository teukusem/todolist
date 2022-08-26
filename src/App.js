import Dashboard from "./pages/Dashboard";
import Item from "./pages/Item";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/item-list" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
