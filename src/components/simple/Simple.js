import React,{useState} from 'react';
import "../simple/Simple.css"
import Button from "@mui/material/Button";
import frame from "../../assets/photos/Frame.png"


    

const Simple = () => {
    return (
        <div>
            <div className="simple-main">
                <div className="simple container">
                
                 <h1 className="simple-h1" >3 Simple Ways To <span>Save</span> A Bunch <br/> Of <span>Money</span> When Buying A New Computer</h1>
                 <p className="simple-p" >Fully customizable and neatly organized components <br/> 
will help you work faster without limiting creative freedom.</p>

                <div className="simple-numb">
                        <h1>100+ 
                        

                            <p>5 Reasons To Purchase <br/> Desktop Computers</p>
                        </h1>

                        <h1>43,000+ 
                            <p>3 Simple Ways To Save A Bunch Of <br/> Money When Buying A New Computer</p>
                        </h1>

                        <h1>30+
                            <p>A Discount Toner Cartridge <br/> Is Better Than Ever And <br/> You Will Save 50 Or More</p>
                        </h1>
                </div>

                <div className="create">
                    <h1 className="simple2-h1">Create your <span>next project</span> with startup<br/> framework</h1>
                    <Button className="simp-btn" variant="contained" color="warning">Get&nbsp;Started</Button>
                    <img src={frame} alt="photo" className="frame" />
                </div>
               
                </div>
            </div>
        </div>
    );
}

export default Simple;
