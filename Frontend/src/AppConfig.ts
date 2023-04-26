class AppConfig{
    public getTargetAudienceURL = "http://localhost:3001/api/target-audience/"
    public getGiftsByAudienceId = "http://localhost:3001/api/gifts-by-target-audienceId/"
    public postGiftURL = "http://localhost:3001/api/gifts/"
}

const appConfig= new AppConfig()
export default appConfig