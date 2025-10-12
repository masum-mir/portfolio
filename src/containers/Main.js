import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import HomeComponent from "../pages/home/HomeComponent";
import ContactComponent from "../pages/contact/ContactComponent";
import EducationComponent from "../pages/education/EducationComponent";
import ExperienceComponent from "../pages/experience/ExperienceComponent";
import ProjectComponent from "../pages/projects/ProjectComponent";
import Error404Page from "../pages/errors/Error404Page";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/education" element={<EducationComponent />} />
        <Route path="/experience" element={<ExperienceComponent />} />
        <Route path="/projects" element={<ProjectComponent />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </div>
  );
};

export default Main;
