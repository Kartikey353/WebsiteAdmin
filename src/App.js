import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourses from "./Components/Register/AddCourses";
import AddScholarship from "./Components/Register/AddScholarship";
import Alldetails from "./Components/Register/Alldetails";
import EditCourses from "./Components/Register/EditCourses";
import EditUnivdetails from "./Components/Register/EditUnivdetails";
import Editscholarship from "./Components/Register/Editscholarship";
import Register from "./Components/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Alldetails />}></Route>
          <Route path="/AddCourses" element={<AddCourses />}></Route>
          <Route path="/AddScholarship" element={<AddScholarship />}></Route>
          <Route path="/EditCourses/:name" element={<EditCourses />}></Route>
          <Route path="/EditUnivdetails/:name" element={<EditUnivdetails />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Editscholarship/:name" element={<Editscholarship />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
