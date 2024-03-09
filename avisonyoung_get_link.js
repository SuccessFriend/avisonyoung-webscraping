const puppeteer = require('puppeteer');
const fs = require('fs');
const csv = require('csv-parser');
const { Parser } = require('json2csv');

let parser = new Parser();

async function scrapFunction() {
        
    for (let i = 0; i < 36; i++) {
        const request_body = `polygon_geojson=&lat_min=&lat_max=&lng_min=&lng_max=&mobile_lat_min=&mobile_lat_max=&mobile_lng_min=&mobile_lng_max=&page=${i}&map_display_limit=5000&map_type=roadmap&country_restrictions=us&custom_map_marker_url=%2F%2Fs3.amazonaws.com%2Fbuildout-production%2Fbrandings%2F6929%2Fprofile_photo%2Fsmall.png%3F1600277316&use_marker_clusterer=true&placesAutoComplete=&q%5Btype_use_offset_eq_any%5D%5B%5D=&q%5Bsale_price_gteq%5D=&q%5Bsale_price_lteq%5D=&q%5Bsale_or_lease_eq%5D=&q%5Bstate_eq_any%5D%5B%5D=&q%5Bbuilding_size_sf_gteq%5D=&q%5Bbuilding_size_sf_lteq%5D=&q%5Blistings_data_max_space_available_on_market_gteq%5D=&q%5Blistings_data_min_space_available_on_market_lteq%5D=&q%5Bproperty_use_id_eq_any%5D%5B%5D=&q%5Bmax_lease_rate_monthly_gteq%5D=&q%5Bmin_lease_rate_monthly_lteq%5D=&q%5Bcap_rate_pct_gteq%5D=&q%5Bcap_rate_pct_lteq%5D=&q%5Bmax_lease_rate_gteq%5D=&q%5Bmin_lease_rate_lteq%5D=&q%5Bhas_broker_ids%5D%5B%5D=&q%5Bs%5D%5B%5D=sale_price+desc&q%5Bcompany_id_in%5D%5B%5D=2419&q%5Bcompany_id_in%5D%5B%5D=254&q%5Bcompany_id_in%5D%5B%5D=2420&q%5Bcompany_id_in%5D%5B%5D=2421&q%5Bcompany_id_in%5D%5B%5D=2422&q%5Bcompany_id_in%5D%5B%5D=2424&q%5Bcompany_id_in%5D%5B%5D=2425&q%5Bcompany_id_in%5D%5B%5D=2426&q%5Bcompany_id_in%5D%5B%5D=2428&q%5Bcompany_id_in%5D%5B%5D=2429&q%5Bcompany_id_in%5D%5B%5D=2430&q%5Bcompany_id_in%5D%5B%5D=2431&q%5Bcompany_id_in%5D%5B%5D=2432&q%5Bcompany_id_in%5D%5B%5D=2433&q%5Bcompany_id_in%5D%5B%5D=2434&q%5Bcompany_id_in%5D%5B%5D=2436&q%5Bcompany_id_in%5D%5B%5D=2437&q%5Bcompany_id_in%5D%5B%5D=2438&q%5Bcompany_id_in%5D%5B%5D=2439&q%5Bcompany_id_in%5D%5B%5D=2440&q%5Bcompany_id_in%5D%5B%5D=1702&q%5Bcompany_id_in%5D%5B%5D=2442&q%5Bcompany_id_in%5D%5B%5D=2443&q%5Bcompany_id_in%5D%5B%5D=2518&q%5Bcompany_id_in%5D%5B%5D=2462&q%5Bcompany_id_in%5D%5B%5D=2463&q%5Bcompany_id_in%5D%5B%5D=1284&q%5Bcompany_id_in%5D%5B%5D=2465&q%5Bcompany_id_in%5D%5B%5D=2466&q%5Bcompany_id_in%5D%5B%5D=2354&q%5Bcompany_id_in%5D%5B%5D=2468&q%5Bcompany_id_in%5D%5B%5D=2469&q%5Bcompany_id_in%5D%5B%5D=2470&q%5Bcompany_id_in%5D%5B%5D=2472&q%5Bcompany_id_in%5D%5B%5D=2474&q%5Bcompany_id_in%5D%5B%5D=2475&q%5Bcompany_id_in%5D%5B%5D=2476&q%5Bcompany_id_in%5D%5B%5D=2477&q%5Bcompany_id_in%5D%5B%5D=2478&q%5Bcompany_id_in%5D%5B%5D=2494&q%5Bcompany_id_in%5D%5B%5D=2480&q%5Bcompany_id_in%5D%5B%5D=2481&q%5Bcompany_id_in%5D%5B%5D=2487&q%5Bcompany_id_in%5D%5B%5D=2482&q%5Bcompany_id_in%5D%5B%5D=2449&q%5Bcompany_id_in%5D%5B%5D=2483&q%5Bcompany_id_in%5D%5B%5D=2479&q%5Bcompany_id_in%5D%5B%5D=2447&q%5Bcompany_id_in%5D%5B%5D=2448&q%5Bcompany_id_in%5D%5B%5D=2484&q%5Bcompany_id_in%5D%5B%5D=2920&q%5Bcompany_id_in%5D%5B%5D=5246&q%5Bcompany_id_in%5D%5B%5D=5629&q%5Bcompany_id_in%5D%5B%5D=6653`;
        await fetch("https://buildout.com/plugins/2763b1ccb3029ac01ba33222d9f0af7bb29a166d/inventory", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "en-US,en;q=0.9,ko;q=0.8",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "_ga=GA1.1.234793834.1709742396; _cookie_preferences=%7B%22analytics%22%3Atrue%7D; _ga_YPL38J0CY7=GS1.1.1709934742.4.1.1709935048.0.0.0",
                "Referer": "https://buildout.com/plugins/2763b1ccb3029ac01ba33222d9f0af7bb29a166d/www.avisonyoung.us/inventory/?pluginId=0&iframe=true&embedded=true&cookieConsentControl=hubspot&cacheSearch=true&=undefined",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": request_body,
            "method": "POST"
        })
        .then(response => {
            if (response.ok) {
                console.log("response okay!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                return response.json(); // assuming the response is in JSON format
            } else {
                throw new Error("Request failed with status " + response.status);
            }
        })
        .then(data => {
            result_data = data.inventory;
            for (let i = 0; i < result_data.length; i++) {
                const link = result_data[i].show_link;
                console.log(link);
                const result = { link };
                const csv = parser.parse(result);
                const csvDataWithoutHeader = csv.split('\n')[1] + '\n';
                fs.appendFileSync("avisonyoung_link.csv", csvDataWithoutHeader, 'utf8', (err) => {
                    if (err) {
                        console.error('Error appending to CSV file:', err);
                    } else {
                        console.log('CSV data appended successfully.');
                    }
                });
                
            }
        })
        .catch(error => {
            console.error("No match result ...");
        });
    }
}

scrapFunction();