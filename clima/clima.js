const axios = require('axios');
const getClima = async(lat,lng)=>{

    // let resp = await  axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=-25.29738&lon=-57.62775&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)
    let resp = await  axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)

   // console.log(resp);

    return resp.data.main.temp;



}

module.exports={
    getClima
}