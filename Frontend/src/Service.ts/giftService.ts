import axios from "axios";
import TargetAudienceModel from "../Models.ts/TargetAudienceModel";
import appConfig from "../AppConfig";
import giftModel from "../Models.ts/giftModel";

async function getAllTargetAudience():Promise<TargetAudienceModel[]>{
  const response = await axios.get<TargetAudienceModel[]>(appConfig.getTargetAudienceURL)
  const targetAudience = response.data
  return targetAudience
}


async function getGiftsByTargetAudienceId(audienceId :number):Promise<giftModel[]>{
    const response = await axios.get<giftModel[]>(appConfig.getGiftsByAudienceId + audienceId)
    const gifts = response.data
    return gifts
}

async function postNewGift(gift : giftModel):Promise<void>{
  await axios.post<giftModel>(appConfig.postGiftURL, gift)
}

export default {
    getAllTargetAudience,
    getGiftsByTargetAudienceId,
    postNewGift

}

