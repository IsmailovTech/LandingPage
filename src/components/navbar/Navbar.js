import React,{useState} from "react";
import "../navbar/Navbar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../../assets/photos/Logo.svg";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";





export function Navbar() {

  const[set, setClick] = useState(false)


  function open(){
    setClick(!set)
    console.log(set)
  }


  return (
    <div>
      <div className="nav">
        <div className="container navbar">
          <Box sx={{ width: "50%", p: 1, my: 0.5 }} >
           
            {/* Responsive logo */}
           <a href="#" className="logo-res" >
              <img src={logo} alt="photo"  />
            </a>
            
            <HiMenu className={set? "logo-close" : "logo-hamb"} size={"40px"} onClick={open} />
            <AiOutlineClose className={set? "logo-hamb" : "logo-close"} size={"40px"} onClick={open} />
            
            {/* Responsive logo */}

            
            <ul className="nav-ul">
            <a href="#">
              <img src={logo} alt="photo" />
            </a>
              <li className="nav-li">
                <a href="#">ABOUT</a>
              </li>
              <li className="nav-li">
                <a href="#">GALLERY</a>
              </li>
              <li className="nav-li">
                <a href="#">PRICING</a>
              </li>
              <li className="nav-li">
                <a href="#">FAQ</a>
              </li>
              <li className="nav-li">
                <a href="#">BENEFITS</a>
              </li>
            </ul>
          </Box>

          <Box className="nav-btn" sx={{ width: "50%", p: 1, my: 0.5 }}>
            <Button variant="outlined" color="warning" id="war-btn1">
              SIGN&nbsp;IN
            </Button>
            <Button variant="contained" color="warning" id="war-btn2">
              SIGN&nbsp;UP
            </Button>
          </Box>
        </div>
      </div>
    {/* resposive */}
      <div className={set? "open-nav box1" : "box1 open-nav2"} >
        <ul className="nav-ul2">
          <li className="nav-li2">
            <a href="#">ABOUT</a>
          </li>
          <li className="nav-li2">
            <a href="#">GALLERY</a>
          </li>
          <li className="nav-li2">
            <a href="#">PRICING</a>
          </li>
          <li className="nav-li2">
            <a href="#">FAQ</a>
          </li>
          <li className="nav-li2">
            <a href="#">BENEFITS</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
