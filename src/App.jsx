import MainLayout from "./pages/MainLayout"
import Home from "./pages/Home"
import Roster from "./pages/Roster"
import Tournaments from "./pages/Tournaments"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="tournaments" element={<Tournaments />} />
              <Route path="roster" element={<Roster />} />
            </Route>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
