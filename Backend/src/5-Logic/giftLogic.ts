import dal from "../2-Utils/dal"
import GiftsModel from "../4-Models/GiftsModel"
import TargetAudienceModel from "../4-Models/TargetAudienceModel"
import {OkPacket} from "mysql"

async function getAllTargetAudience():Promise<TargetAudienceModel[]>{
    const sql=`
    SELECT * from targetaudience
    `
    const targetAudience= await dal.execute(sql)
    return targetAudience
}


async function getGiftByTargetAudienceId(audienceId:number):Promise<GiftsModel[]>{

const sql = `
    SELECT * FROM gifts
    WHERE gifts.targetAudienceId=${audienceId}
`
const gifts= await dal.execute(sql)
return gifts
}

async function postGift(addedGift:GiftsModel ):Promise<GiftsModel>{
    const sql= `
    INSERT INTO gifts
    VALUES( NULL,
        ${addedGift.targetAudienceId},
        "${addedGift.name}",
        "${addedGift.description}",
        ${addedGift.price},
        ${addedGift.discount}
        )
    `
    const response : OkPacket = await dal.execute(sql)
    addedGift.giftId = response.insertId
    return addedGift
}

export default {
    getAllTargetAudience,
    getGiftByTargetAudienceId,
    postGift
}