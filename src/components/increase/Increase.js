import React from 'react';
import "../increase/Increase.css"
import inc from "../../assets/photos/increase-main.png"
import Button from "@mui/material/Button";

const Increase = () => {
    return (
        <div>
            <div className="increase-main">
                <div className="increase-main2 container">

                    <div className="increase-left">
                        <h1>Increase your <br/> business <span>traffic</span> </h1>
                        <p>We are committed to processing the information in order to <br/> contact you and talk about your project. </p>
                        <Button variant="contained" color="warning">Learn&nbsp;More</Button>
                    </div>

                    <div className="increase-left">
                        <img src={inc} alt="photo" />
                    </div>

                    <div className="incr-bg"></div>

                    
                
                </div>

            </div>
        </div>
    );
}

export default Increase;
