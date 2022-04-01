import Footer from "./components/Content/Footer";
import NavBar from "./components/Content/NavBar";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <main className="mt-5">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
