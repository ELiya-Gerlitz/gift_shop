class GiftsModel{
    public giftId: number
    public targetAudienceId: string
    public name: string
    public description: string
    public price: number
    public discount : number

    public constructor(gift : GiftsModel){
        this.giftId = gift.giftId
        this.targetAudienceId = gift.targetAudienceId
        this.name = gift.name
        this.description = gift.description
        this.price = gift.price
        this.discount = gift.discount
    }
}

export default GiftsModel