import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./Routing.css";
import GetTargetAudience from "../../GiftsArea/GetTargetAudience/GetTargetAudience";
import GetGifts from "../../GiftsArea/GetGifts/GetGifts";
import AddGift from "../../GiftsArea/AddGift/AddGift";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route  path="/home" element={<Home/>} />
                <Route  path="/getTargetAudience" element={<GetTargetAudience/>} />
                <Route  path="/getGiftsByTargetAudienceId/:TargetAdienceId" element={<GetGifts/>} />
                <Route  path="/add-gift" element={<AddGift/>} />
              
            </Routes>
            {/* <Home/> */}
        </div>
    );
}

export default Routing;
