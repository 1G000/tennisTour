import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import MainLayout from "./pages/MainLayout";
import Tournaments from "./pages/Tournaments";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="roster" element={<Roster />} />
              <Route path="tournaments" element={<Tournaments />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
