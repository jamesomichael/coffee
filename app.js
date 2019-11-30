const axios = require('axios');
const fs = require('fs');

const credentials = require('./keys/foursquare');
const venues_endpoint = 'https://api.foursquare.com/v2/venues';
const location = process.argv[2] ? process.argv[2] : 'cardiff';
const coffee_category = '4bf58dd8d48988d1e0931735';
const date = new Date().toISOString().split('T')[0].replace(/-/g,'');

let shop_array = [];

const get_coffee_shops = async () => {
    try {
        let response = await axios.get(`${venues_endpoint}/search?client_id=${credentials.id}&client_secret=${credentials.secret}&near=${location}&categoryId=${coffee_category}&limit=20&v=${date}`);
        
        // let shops = response.data.response.venues;
        // await shops.forEach(async shop => {
        //     // await get_shop_hours(shop);
        // });
        shop_array = [{"venue":{"id":"4d00decff7b38cfab4bcd1c3","name":"Barkers Coffee","location":["Unit 13, Castle Arcade","Cardiff","CF10 1BU","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6],"includesToday":true,"open":[{"start":"0900","end":"1730"}],"segments":[]},{"days":[7],"open":[{"start":"1000","end":"1700"}],"segments":[]}]}},{"venue":{"id":"5afad19b18d43b002c083e6a","name":"Coffee Planet","location":["Newport Road","Cardiff","C F24","United Kingdom"]},"hours":{}},{"venue":{"id":"4c0806e2980395210dfac196","name":"Starbucks","location":["Unit 1 The Brewery Quarter (St Marys St.)","Cardiff","CF10 5DS","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6],"includesToday":true,"open":[{"start":"0630","end":"2000"}],"segments":[]},{"days":[7],"open":[{"start":"0800","end":"1830"}],"segments":[]}]}},{"venue":{"id":"59deae540457b77fd1648446","name":"Starbucks","location":["Longwood Drive","Cardiff","CF14 7EW","United Kingdom"]},"hours":{}},{"venue":{"id":"4ce6a72f595cb1f77598bd14","name":"Caffè Nero","location":["House of Fraser (Trinity St.)","Cardiff","CF10 1TT","United Kingdom"]},"hours":{}},{"venue":{"id":"57bf33ed498e2a28007c55dd","name":"Brodies Coffee Cabin","location":["Gorsedd Gardens (Civic Centre)","Cardiff","C F10","United Kingdom"]},"hours":{}},{"venue":{"id":"5a00f1b50fe7a030cf9563f7","name":"Coffi Co Lounge","location":["31 Mermaid Quay","Cardiff","CF10 5BZ","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6,7],"includesToday":true,"open":[{"start":"0800","end":"2000"}],"segments":[]}]}},{"venue":{"id":"54b7da0f498e064aa51facc5","name":"Costa Coffee","location":["Talbot Green Shopping Park","Llantrisant","United Kingdom"]},"hours":{}},{"venue":{"id":"4c1242c7b2510f47cb46c498","name":"Costa Coffee","location":["Working St.","Cardiff","CF10 2DP","United Kingdom"]},"hours":{}},{"venue":{"id":"55182f7d498e18feb942e2b7","name":"Costa Coffee","location":["Queen Street","Cardiff","United Kingdom"]},"hours":{}},{"venue":{"id":"5a0f12c8610f042340a37bdc","name":"Costa Coffee","location":["Cardiff","C F14","United Kingdom"]},"hours":{}},{"venue":{"id":"5bc8566e968f31002c0801bc","name":"Pret A Manger","location":["Central Square","Cardiff","CF10 1FS","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5],"open":[{"start":"0630","end":"1930"}],"segments":[]},{"days":[6],"includesToday":true,"open":[{"start":"0830","end":"1800"}],"segments":[]},{"days":[7],"open":[{"start":"0830","end":"1700"}],"segments":[]}]}},{"venue":{"id":"56704594498e0b21cf629a83","name":"Academy Espresso Bar","location":["United Kingdom"]},"hours":{}},{"venue":{"id":"4e5b7cb67d8b966a15e2c343","name":"Costa Coffee","location":["Cardiff Bay Retail Park","Cardiff","CF11 0JR","United Kingdom"]},"hours":{}},{"venue":{"id":"53ca87da498e889ccf2b70e1","name":"Caffè Nero","location":["Newport Retail Park","Newport","Gwent","United Kingdom"]},"hours":{}},{"venue":{"id":"57bc614b498e3ebb41877d14","name":"Benugo","location":["John Lewis (St David's 2)","Cardiff","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5],"open":[{"start":"0930","end":"2000"}],"segments":[]},{"days":[6],"includesToday":true,"open":[{"start":"0900","end":"1900"}],"segments":[]},{"days":[7],"open":[{"start":"1100","end":"1700"}],"segments":[]}]}},{"venue":{"id":"5cf67be00e3239002bf2334a","name":"Heavenly Desserts","location":["1-3 Windsor Pl","Cardiff","CF10 3BX","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,7],"open":[{"start":"1100","end":"2300"}],"segments":[]},{"days":[5,6],"includesToday":true,"open":[{"start":"1200","end":"+0000"}],"segments":[]}]}},{"venue":{"id":"5496d0ae498e34ab34775425","name":"The Little Man Coffee Co","location":["Bridge St","Cardiff","CF10 2EE","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5],"open":[{"start":"0700","end":"2100"}],"segments":[]},{"days":[6],"includesToday":true,"open":[{"start":"0800","end":"2100"}],"segments":[]},{"days":[7],"open":[{"start":"0800","end":"1830"}],"segments":[]}]}},{"venue":{"id":"4f9524c8771646ff3d77e1dd","name":"Coffee #1","location":["211-217 Cathedral Rd","Cardiff","CF11 9PP","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6],"includesToday":true,"open":[{"start":"0730","end":"1800"}],"segments":[]},{"days":[7],"open":[{"start":"0900","end":"1800"}],"segments":[]}]}},{"venue":{"id":"58b0c62fbbec661b467dbe64","name":"Starbucks","location":["82-88 Queen St (Next)","Cardiff","CF10 2GR","United Kingdom"]},"hours":{}},{"venue":{"id":"5215082f11d26dfe95ba53c3","name":"Starbucks","location":["M5 J19 (Gordano Motorway Services Area)","Portbury","North Somerset","BS20 7XG","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6,7],"includesToday":true,"open":[{"start":"0000","end":"+0000"}],"segments":[]}]}},{"venue":{"id":"4b6ffd54f964a52080022de3","name":"Starbucks","location":["Units 1-5 Dunleavy Dr","Cardiff","CF11 0SR","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6,7],"includesToday":true,"open":[{"start":"0000","end":"+0000"}],"segments":[]}]}},{"venue":{"id":"4c024423cd1895215a76f4b3","name":"Starbucks","location":["Unit 4, Tyglass Centre, Llanishen","Cardiff","CF14 5DY","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5],"open":[{"start":"0700","end":"1930"}],"segments":[]},{"days":[6],"includesToday":true,"open":[{"start":"0800","end":"1900"}],"segments":[]},{"days":[7],"open":[{"start":"0900","end":"1800"}],"segments":[]}]}},{"venue":{"id":"5bddab7f97cf5a002ce3537d","name":"Kin + Ilk Christmas Pop Up","location":["St David’s Centre (Upper Level Eastside)","Cardiff","CF10 2ER","United Kingdom"]},"hours":{}},{"venue":{"id":"5315d2d211d2c227cf2a7037","name":"Starbucks","location":["20 Newport Road (Fitzalan Pl)","Cardiff","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5],"open":[{"start":"0700","end":"1900"}],"segments":[]},{"days":[6],"includesToday":true,"open":[{"start":"0930","end":"1600"}],"segments":[]}]}},{"venue":{"id":"5aa6835f7564f726aee9704e","name":"Caffè Nero","location":["St David's","Cardiff","CF10 2DS","United Kingdom"]},"hours":{}},{"venue":{"id":"4bd561ce5631c9b6c2f8a330","name":"Starbucks","location":["Bristol Airport (BRS)","North Somerset","BS48 3DY","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6,7],"includesToday":true,"open":[{"start":"0500","end":"2200"}],"segments":[]}]}},{"venue":{"id":"550c5257498ea2dd2c663eae","name":"Uncommon Ground Coffee Co.","location":["Royal Arcade","Cardiff","CF10 1AE","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6],"includesToday":true,"open":[{"start":"0730","end":"1830"}],"segments":[]},{"days":[7],"open":[{"start":"1000","end":"1700"}],"segments":[]}]}},{"venue":{"id":"4baf9f3ef964a520db103ce3","name":"Ocho Lounge","location":["16 Windsor Rd","Penarth","Vale of Glamorgan","CF64 1JB","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6,7],"includesToday":true,"open":[{"start":"0900","end":"2300"}],"segments":[]}]}},{"venue":{"id":"4f316e89d5fbbed5d18e973f","name":"Caffè Nero","location":["Unit 5/6, Capitol Centre, Queen Street","Cardiff","CF10 2HQ","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5],"open":[{"start":"0630","end":"1930"}],"segments":[]},{"days":[6],"includesToday":true,"open":[{"start":"0700","end":"1930"}],"segments":[]},{"days":[7],"open":[{"start":"0730","end":"1930"}],"segments":[]}]}},{"venue":{"id":"4c497d4d1b430f47a8e597c3","name":"Costa Coffee","location":["Unit 49 (McArthurGlen Bridgend Designer Outlet)","Bridgend","Bridgend County Borough","CF32 9SU","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5],"open":[{"start":"1000","end":"2000"}],"segments":[{"start":"1000","end":"1800","label":"Bank Holidays"}]},{"days":[6],"includesToday":true,"open":[{"start":"1000","end":"1900"}],"segments":[]},{"days":[7],"open":[{"start":"1000","end":"1700"}],"segments":[]}]}},{"venue":{"id":"56508f59498e361749aefaa4","name":"Costa Coffee","location":["Newport Road","Cardiff","United Kingdom"]},"hours":{}},{"venue":{"id":"5800a5f038fa38b858898e61","name":"Second Cup Coffee Company","location":["95 (Queen St)","Cardiff","CF10 2BG","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6],"includesToday":true,"open":[{"start":"0700","end":"2100"}],"segments":[]},{"days":[7],"open":[{"start":"0800","end":"1800"}],"segments":[]}]}},{"venue":{"id":"5d80f53baff0cf00083432b0","name":"CUPP","location":["Cardiff","CF10 2EJ","United Kingdom"]},"hours":{}},{"venue":{"id":"4d569c39ba5b224bdbc51c14","name":"Costa Coffee","location":["Castle Court","Caerphilly","Caerphilly County Borough","United Kingdom"]},"hours":{}},{"venue":{"id":"546efda0498e985ea5fdc386","name":"Costa Coffee","location":["Royal Gwent Hospital","Newport","United Kingdom"]},"hours":{}},{"venue":{"id":"5745a48b498e50f8156454c3","name":"Starbucks","location":["Newport Rd","Cardiff","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5],"open":[{"start":"0530","end":"2230"}],"segments":[]},{"days":[6,7],"includesToday":true,"open":[{"start":"0700","end":"2230"}],"segments":[]}]}},{"venue":{"id":"5943e2d4625a666444247466","name":"Starbucks","location":["4-6 Queen St (St John's St)","Cardiff","CF10 2AF","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6],"includesToday":true,"open":[{"start":"0630","end":"2100"}],"segments":[]},{"days":[7],"open":[{"start":"0730","end":"2000"}],"segments":[]}]}},{"venue":{"id":"502904735dd7750e9d63bbce","name":"Starbucks","location":["St. David's Centre, Bridgelink","Cardiff","CF10 1GA","United Kingdom"]},"hours":{}},{"venue":{"id":"4f77034fe4b0557b21ae3482","name":"Pettigrew Tea Rooms","location":["West Lodge, Bute Park & Arboretum (Castle Street)","Cardiff","CF10 1BJ","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6,7],"includesToday":true,"open":[{"start":"1000","end":"1700"}],"segments":[]}]}},{"venue":{"id":"5a0c5a441755623dc7ab808d","name":"Tim Hortons","location":["Unit 20 Queens Arcade (Queen Street)","Cardiff","CF10 2BY","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,7],"open":[{"start":"0700","end":"2100"}],"segments":[]},{"days":[5,6],"includesToday":true,"open":[{"start":"0700","end":"2200"}],"segments":[]}]}},{"venue":{"id":"4e6f49e4b0fbacf2adaeec1c","name":"Stilts","location":["Pontypridd","United Kingdom"]},"hours":{}},{"venue":{"id":"4bb33ef135f0c9b6731abc83","name":"Costa Coffee","location":["Grand Arcade (St David's Dewi Sant)","Cardiff","CF10 2ER","United Kingdom"]},"hours":{}},{"venue":{"id":"5140c2cfe4b0249df664d631","name":"Costa Coffee","location":["18 Windsor Rd","Penarth","Vale of Glamorgan","CF64 1JH","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6],"includesToday":true,"open":[{"start":"0700","end":"1830"}],"segments":[]},{"days":[7],"open":[{"start":"0900","end":"1700"}],"segments":[]}]}},{"venue":{"id":"4ed9f8c702d5244e2ff01a4a","name":"Costa Coffee","location":["19 South Walk (Cwmbran Shopping Centre)","Cwmbran","Torfaen County Borough","NP44 1PB","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6],"includesToday":true,"open":[{"start":"0700","end":"1900"}],"segments":[]},{"days":[7],"open":[{"start":"0900","end":"1700"}],"segments":[]}]}},{"venue":{"id":"5b8a8719c62b49002c6707fe","name":"Coffi Co – Bayscape","location":["Watkiss Way, Cardiff Marina","Cardiff","CF11 0SY","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,7],"open":[{"start":"0800","end":"2000"}],"segments":[]},{"days":[5,6],"includesToday":true,"open":[{"start":"0800","end":"2300"}],"segments":[]}]}},{"venue":{"id":"5bd864250a08ab002c2c64ee","name":"The Galley","location":["Penarth Portway (Penarth Marina)","Penarth","Vale of Glamorgan","CF64 1TT","United Kingdom"]},"hours":{"timeframes":[{"days":[1,2,3,4,5,6],"includesToday":true,"open":[{"start":"0900","end":"1700"}],"segments":[]},{"days":[7],"open":[{"start":"0900","end":"1600"}],"segments":[]}]}}]

        fs.writeFileSync('./helpers/search_response.json', JSON.stringify(shop_array, null, 4));
        return true;
    } catch (error) {
        if (error.response) {
            console.log(`${error.response.status} - ${error.response.statusText}`);
        } else {
            console.log(error);
        }
        return false;
    }
};

const get_shop_hours = async data => {
    try {
        let venue = {
            id: data.id,
            name: data.name,
            location: data.location.formattedAddress
        };
        let hours = await axios.get(`${venues_endpoint}/${venue.id}/hours?client_id=${credentials.id}&client_secret=${credentials.secret}&v=${date}`);
        let venue_details = {};
        venue_details['venue'] = venue;
        venue_details['hours'] = hours.data.response.hours;
        // venue_details['popular'] = hours.data.response.popular;
        shop_array.push(venue_details);
    } catch (error) {
        if (error.response) {
            console.log(`${error.response.status} - ${error.response.statusText}`);
        } else {
            console.log(error);
        }
    }
};

const format_shop_array = () => {
    shop_array = shop_array.filter(obj => obj.hours.timeframes);
    shop_array.forEach(shop => {
        let times = shop.hours.timeframes;
        let today = times.filter(obj => obj.includesToday);
        shop['hours']['timeframes'] = today; 
    });

    shop_array = shop_array.filter(obj => obj.hours.timeframes[0].open[0].end > `${new Date().getHours()}${new Date().getMinutes()}` || obj.hours.timeframes[0].open[0].end === '+0000');

    shop_array.sort((a, b) => (a.hours.timeframes[0].open[0].end < b.hours.timeframes[0].open[0].end) ? 1 : -1);

    shop_array.forEach(shop => {
        let name = shop.venue.name;
        let address = shop.venue.location;
        let open = shop.hours.timeframes[0].open[0].start;
        let close = shop.hours.timeframes[0].open[0].end;
        let open_until = open === '0000' && close === '+0000' ? 'Open 24 hours' : open !== '0000' && close === '+0000' ? 'Open until midnight' : `Open until ${close}`;

        console.log(`\n${name.toUpperCase()} (${open_until})\n${address.toString().replace(/,/g,'\n')}\n`);
    });

    console.log(`Found ${shop_array.length} coffee shops currently open in ${location.toUpperCase()}.`);
};

const init = async () => {
    let shops = await get_coffee_shops();
    if (shops) format_shop_array();
};

init();
