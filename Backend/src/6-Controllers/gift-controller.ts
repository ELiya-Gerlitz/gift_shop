import express, { NextFunction, Request, Response } from "express"
import giftLogic from "../5-Logic/giftLogic"
import GiftsModel from "../4-Models/GiftsModel"


const router= express.Router()

router.get("/target-audience", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const targetAudience = await giftLogic.getAllTargetAudience()
        response.json(targetAudience)
    }catch(err:any){
        next(err)
    }
})

router.get("/gifts-by-target-audienceId/:targetAudienceId", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const targetAudienceId= +request.params.targetAudienceId
        const gifts = await giftLogic.getGiftByTargetAudienceId(targetAudienceId)
        response.json(gifts)
    }catch(err:any){
        next(err)
    }
})

router.post("/gifts", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const newGift = new GiftsModel(request.body)
        const addedGift = await giftLogic.postGift(newGift)
        response.json(addedGift)
    }catch(err:any){
        next(err)
    }
})

export default router