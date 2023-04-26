import { useForm } from "react-hook-form";
import "./AddGift.css";
import giftService from "../../../Service.ts/giftService";
import giftModel from "../../../Models.ts/giftModel";
import { useEffect, useState } from "react";
import TargetAudienceModel from "../../../Models.ts/TargetAudienceModel";
import { useNavigate } from "react-router-dom";

function AddGift(): JSX.Element {
    const {register, handleSubmit} = useForm<giftModel>()
    const [target, setTarget]= useState<TargetAudienceModel[]>()
    const navigate = useNavigate()

    const send = (newGiftToAdd :giftModel)=>{
        try{
            giftService.postNewGift(newGiftToAdd)
            alert("added successfully!")
            navigate("/home")
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        giftService.getAllTargetAudience()
        .then(target=>setTarget(target))
        .catch(err=>console.log(err))
    },[])

    return (
        <div className="AddGift">
			i am add gift
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="gift name " {...register("name", { required: true })}></input><br></br>
                <input type="text" placeholder="description " {...register("description", { required: true })}></input><br></br>
                <input type="number" placeholder="price " {...register("price", { required: true })}></input><br></br>
                <input type="number" placeholder="discount " {...register("discount", { required: true })}></input><br></br>
                <select {...register("targetAudienceId", {required: true})}>{target && target.map(t=><option key={t.targetAudienceId} value={t.targetAudienceId}>{t.targetAudienceName}</option>)}</select>
                <br></br>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default AddGift;
