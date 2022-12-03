import logo from "./logo.svg";
import "./App.css";
import ResumePage from "./pages/ResumePage/ResumePage";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<ResumePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
