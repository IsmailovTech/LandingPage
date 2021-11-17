import React from "react";
import "../body/Body.css";
import Button from "@mui/material/Button";
import "@fontsource/inter";
import Vedio from "./vedio/Vedio";
import brands from "../../assets/photos/companyLogos.png";
import man from "../../assets/photos/body1.png";
import { HiPaperAirplane } from "react-icons/hi";
import { GoZap } from "react-icons/go";
import { MdHdrStrong } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md"; 
import { MdWifiTethering } from "react-icons/md"; 
import { MdPestControl } from "react-icons/md"; 
import bgci from "../../assets/photos/Group-bgc.png";





export default function Body() {
  return (
    <div>
      <div className="body-main ">
        <div className="body-cont container">
          <h1 className="body-h1" >Many reasons to get up and start to get back in the business </h1>
          <p className="body-p">
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </p>
          <Button variant="contained" color="warning" id="left-btn" >
            Learn&nbsp;More
          </Button>
          <Button variant="outlined" color="warning" id="right-btn" >
            Demo&nbsp;
          </Button>

          <div className="body-vedio" >
              <div className="ved"><Vedio /></div> 
                 <div className="cont-ved">
                     <p>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <Button>Watch&nbsp;preview</Button>
                 </div>
              
          </div>
      
        <img src={brands} alt="photo" className="logo-brands" />
        </div>
        <img src={man} alt="photo" className="logo-man" />

        <div className="bgc-choice"></div>
            <div className="choice-main container">
                    <h1 className="choice-main-h1" >Your choice</h1>
                    <p className="choice-main-p">There are many reasons to get down and start to get depressed about your situation. </p>

                    <div className="containers">
                        <div className="card-box1">

                            <div className="card1">
                                <div className="card-logo">
                                    <HiPaperAirplane className="icon-hero" />
                                    <span>Ecstatic elegance
                                        <p className="card1-cont" >Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.</p>
                                    </span>
                                </div>
                            
                            </div>
                            <div className="card2">
                                <div className="card-logo">
                                    <GoZap className="icon-hero" />
                                    <span>Open game
                                        <p className="card1-cont" >Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.</p>
                                    </span>
                                </div>
                            
                            </div>
                        </div>

                        <div className="card-box1">

                            <div className="card1">
                                <div className="card-logo">
                                    <MdHdrStrong className="icon-hero" />
                                    <span>Folly words widow
                                        <p className="card1-cont" >Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.</p>
                                    </span>
                                </div>
                            
                            </div>

                            <div className="card2">
                                <div className="card-logo">
                                    <MdPestControl className="icon-hero" />
                                    <span>Endeavor
                                        <p className="card1-cont" >Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. </p>
                                    </span>
                                </div>
                            
                            </div>
                        </div>

                        <div className="card-box1">

                            <div className="card1">
                                <div className="card-logo">
                                    <MdWifiTethering className="icon-hero" />
                                    <span>Possible procured trifling
                                        <p className="card1-cont" >We me rent been part what. An concluded sportsman offending so provision mr education.</p>
                                    </span>
                                </div>
                            
                            </div>

                            <div className="card2">
                                <div className="card-logo">
                                    <MdTipsAndUpdates className="icon-hero" />
                                    <span>Comfort pursuit
                                        <p className="card1-cont" >Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.</p>
                                    </span>
                                </div>
                            
                            </div>
                        </div>
                    </div>
            </div>
        
       </div>
    </div>
  );
}
