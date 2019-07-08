const axios = require('axios');


const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    // let resp = await axios.get(`https://geocoder.api.here.com/6.2/geocode.json?app_id=hlYlKfrmvQMwCSzfIOW0&app_code=EkBMezaf3HFDO7YsTvb7iQ&searchtext=Asuncion`)
    let resp = await axios.get(`https://geocoder.api.here.com/6.2/geocode.json?app_id=hlYlKfrmvQMwCSzfIOW0&app_code=EkBMezaf3HFDO7YsTvb7iQ&searchtext=${encodedUrl}`)

    // console.log(resp.data);
    // console.log(resp.data.Response.View[0].Result[0].Location.Address.Label);

    if(resp.data.Response.View === ''){
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }
    // if(resp.data.status === 'ZERO_RESULTS'){
    //     throw new Error(`No hay resultados para la ciudad ${direccion}`)
    // }

        //.then(resp => {

            let location = resp.data.Response.View[0];

            let coors = location.Result[0].Location.DisplayPosition;

            // console.log(resp.status);
            //console.log(JSON.stringify(resp.data,undefined,2 ));
        //})
    //     .catch(e => console.log('Error', e))

    // console.log(argv.direccion);

    return {
        direccion: location.Result[0].Location.Address.Label,
        lat: coors.Latitude,
        lng: coors.Longitude
    }

}
module.exports={
    getLugarLatLng
}






/*axios.get(`https://geocoder.api.here.com/6.2/geocode.json?app_id=hlYlKfrmvQMwCSzfIOW0&app_code=EkBMezaf3HFDO7YsTvb7iQ&searchtext=Asuncion`)
    .then((res)=>{
        //console.log(JSON.stringify(res.data,undefined,2));
        //console.log(res.data);
        let location = res.data.Response.View[0];

        let direccion = location.Result[0].Location.Address.Label;

        let latitud = location.Result[0].Location.DisplayPosition.Latitude;

        let longitud = location.Result[0].Location.DisplayPosition.Longitude;

        console.log('Direccion: ',direccion);
        console.log('Latitud: ',latitud);
        console.log('Lonigtud: ', longitud);
    })
    .catch((err)=>{

    })
    */