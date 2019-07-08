//const fetch = require ("isomorphic-fetch");
//const axios = require('axios');
const clima = require('./clima/clima');

//se usa la funcion options cuando no pasaremos ningun command a la aplicacion o sea directamente pasaremos los parametros asignados
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion  de la ciudad',
        demand: true
    }
}).argv

// console.log("Escribe tu nombre");
// var stdin = process.openStdin();

// stdin.addListener("data", function(d) {
     
//          return d.toString().trim();
//   });

//console.log(argv.direccion);

let encodedURL= encodeURI(argv.direccion);

let getInfo = async (direccion) => {

    try{
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng)

        // console.log(coors);
        // console.log(clima);
    
        return `El clima en ${coors.direccion} es de ${temp}`;

    }catch(e){
        return `No se pudo determinar el clima para ese lugar`,e
    }
    
}

getInfo(argv.direccion)
    .then(msj => console.log(msj))
    .catch(e => console.log(e))





// axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=-25.29738&lon=-57.62775&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`)
// .then(resp=>{

//     console.log(resp.data.main.temp)
// })





// fetch('https://geocoder.api.here.com/6.2/geocode.json?app_id=hlYlKfrmvQMwCSzfIOW0&app_code=EkBMezaf3HFDO7YsTvb7iQ&searchtext=425+W+Randolph+Chicago')
// .then((res)=>{
//     console.log(res.data);
// })


