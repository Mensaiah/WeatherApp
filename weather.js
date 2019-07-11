class Weather{
    constructor(city){
        this.apiKey = '05ed3a703c304fe48a9174218191007'
        this.city = city
        
    }

    async getWeather(){
        const response = await  fetch(`https://api.apixu.com/v1/current.json?key=05ed3a703c304fe48a9174218191007&q=${this.city}`)

        const responseData = await response.json()

        return responseData

    }
    changeLocation(city){
        this.city = city
        
    }
}