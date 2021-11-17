import React from 'react';
import "../invest/Invest.css"
import Button from "@mui/material/Button";
import object from "../../assets/photos/Object.png"
import group from "../../assets/photos/Group.png"

const Invest = () => {
    return (
        <div>
            <div className="invest-main">
               
                <div className="invest container">
                        <div className="invest-left">
                            <h1>Invest property for<br/> better <span>business</span></h1>
                            <p>We are committed to processing the information in order to <br/>contact you and talk about your project. We are committed to <br/> processing the information.</p>
                            <Button id="invest-btn" variant="contained" color="warning">Learn More</Button>
                        </div>

                        <div className="invest-right">
                            <img src={object} alt="photo" className="inv-obj" />
                            <img src={group} alt="photo" className="inv-gr" />
                        </div>

                </div>

            </div>
        </div>
    );
}

export default Invest;
