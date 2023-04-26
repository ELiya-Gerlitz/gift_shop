import { useNavigate, useParams } from "react-router-dom";
import "./GetGifts.css";
import { useEffect, useState } from "react";
import giftService from "../../../Service.ts/giftService";
import giftModel from "../../../Models.ts/giftModel";

function GetGifts(): JSX.Element {
    const [gifts, setGifts] = useState<giftModel[]>()
    const params = useParams()
    const navigate = useNavigate()

useEffect(()=>{
    const targetAudienceId = +params.TargetAdienceId
        giftService.getGiftsByTargetAudienceId(targetAudienceId)
        .then(gifts=> setGifts(gifts))
        .catch(err=> console.log(err))

})
function getBack(){
    navigate("/getTargetAudience")
}
 

    return (
        <div className="GetGifts">
            <h3>Details: </h3>
                                                      
			{gifts && 
            <table>
               <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Discount</th>
                </tr>
                </thead>
                <tbody>
            {gifts.map(g=> 
                    
                        <tr key={g.giftId}>
                            <td>{g.name}</td>
                            <td>{g.price}</td>
                            <td>{g.description}</td>
                            <td>{g.discount}</td>
                        </tr>
               
                   )}
                        </tbody>
             </table>}
             <br></br>
             <button onClick={getBack}>back to categories</button>
        </div>
    );
}

export default GetGifts;
