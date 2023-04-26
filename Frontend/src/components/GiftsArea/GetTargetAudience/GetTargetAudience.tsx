import { useEffect, useState } from "react";
import "./GetTargetAudience.css";
import giftService from "../../../Service.ts/giftService";
import TargetAudienceModel from "../../../Models.ts/TargetAudienceModel";
import { NavLink } from "react-router-dom";

function GetTargetAudience(): JSX.Element {
    const [tAudience, setTAudience] = useState<TargetAudienceModel[]>()
useEffect(()=>{
    giftService.getAllTargetAudience()
    .then(tAudience=>setTAudience(tAudience))
    .catch(err=>console.log(err))
})




    return (
        <div className="GetTargetAudience">
            <h3>Target Audience for our gifts</h3>
           <div className="clickme"> You can press each category and get the gifts available for it.</div>

{tAudience && tAudience.map(TA=> 
    <button key={TA.targetAudienceId}> <NavLink to={"/getGiftsByTargetAudienceId/" + TA.targetAudienceId} >{TA.targetAudienceName} </NavLink></button>
    )}
        </div>
    );
}

export default GetTargetAudience;
