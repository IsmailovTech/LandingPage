import React,{useRef} from 'react';
import "../help/Help.css"
import group from "../../assets/photos/Group 13.png"
import grbg from "../../assets/photos/bg-group.png"
import { HiServer } from "react-icons/hi";
import { HiStatusOnline } from "react-icons/hi";

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";






const Help = () => {

const myRef = useRef();

    return (
        <div>
            <div className="help-main">
                <div className="help container">
                    <div className="help-left">
                        <img src={group} alt="photo"/>
                    </div>
                    <div className="help-right">
                        <h1>Help Finding Information Online</h1>
                        <p className="help-right-p">Fully customizable and neatly organized components<br/>will help you work faster without limiting creative freedom.</p>

                        <div className="help-cont">
                            <div className="cont1">
                              <HiServer size={"36px"} color={"#DADADA"} />
                              <h2>Feature One</h2>
                              <p>Fully customizable and neatly <br/> organized components will <br/>help you work faster </p>
                            </div>

                            <div className="cont1">
                             <HiStatusOnline size={"36px"} color={"#DADADA"}/>
                              <h2>Feature One</h2>
                              <p>Fully customizable and neatly <br/> organized components will <br/>help you work faster </p>
                            </div>
                        <img src={grbg} alt="photo" className="grbg" />
                        </div>

                    </div>
                </div>
                <div className="last-gr">
                        <div className="input">
                            <h1>There are many reasons to get down</h1>
                            <p>There are many reasons to get down and start to get <br/> depressed about your situation. </p>
                        
                            <Box className="box-input" component="form" noValidate autoComplete="off">
                                
                                    <FormControl className="input-rc" sx={{ width: '380px'}}>
                                    <OutlinedInput placeholder="Your Email" />
                                    </FormControl>
                                    <Button  variant="contained" color="warning" id="send-btn" >Send&nbsp;</Button>

                            </Box>

                            <p>No spam. Only releases, updates and discounts</p>
                            

                        </div>
                </div>
            </div>
        </div>
    );
}

export default Help;
