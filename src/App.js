import Company from "./compunat/Company";
import CompanyBank from "./compunat/CompanyBank";
import Contact from "./compunat/contact";
import Button from "./compunat/button";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const[activeLink,setLink]=useState([true,false,false]);
  return (
    <form id="form">
      <Router>
      <nav>
        <ul className="tags-list">
          <li className={`${(activeLink[0])?'active-link':''}`} onClick={()=>{
            const arr=[...activeLink].fill(false)
            arr[0]=true
            setLink(arr)
          }}>
            <Link to="/">CompanyInformation</Link>
          </li>
          <li className={`${(activeLink[1])?'active-link':''}`}
           onClick={()=>{
            const arr=[...activeLink].fill(false)
            arr[1]=true
            setLink(arr)
          }}
          >
            <Link to="/Bank">CompanyBank</Link>
          </li>
          <li className={`${(activeLink[2])?'active-link':''}`}
           onClick={()=>{
            const arr=[...activeLink].fill(false)
            arr[2]=true
            setLink(arr)
          }}>
            <Link to="/contact">CompanyContact</Link>
          </li>
        </ul>
      </nav>
      <div style={{width:"100%", marginLeft:'2rem'}}>
        <Routes>
          <Route path="/" element={<Company />}></Route>
          <Route path="/Bank" element={<CompanyBank />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Button />
        </div>
      </Router>

      
    </form>
  );
}

export default App;
