import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import  Service  from "./Pages/Service";
import  Portfolio  from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";
import SideBar from "./Components/SideBar";
import LoginePage from "./Pages/LoginPage";
import About from "./Pages/About";
import "./App.css";
function App() {
  return (
    <>
      <div className="flex h-screen">
        <SideBar />

        <div className="flex-1 bg-gray-100 p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/loginPage" element={<LoginePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
