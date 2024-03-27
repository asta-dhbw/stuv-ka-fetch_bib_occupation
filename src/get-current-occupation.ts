import ApiResponse, { ApiResponseFormat } from './models/ApiResponse';

const API_ENDPOINT = 'https://seatfinder.bibliothek.kit.edu/karlsruhe/getdata.php?location%5B0%5D=FBD&values%5B0%5D=seatestimate%2Cmanualcount&after%5B0%5D=-10800seconds&before%5B0%5D=now&limit%5B0%5D=-17&location%5B1%5D=FBD&values%5B1%5D=location&after%5B1%5D=&before%5B1%5D=now&limit%5B1%5D=1';

async function fetchLatestUsage() {
    const response = await fetch(API_ENDPOINT);
    const json = await response.json();

    const apiResponse = new ApiResponse(json as ApiResponseFormat);

    return apiResponse;
}

(async () => {

    fetchLatestUsage().then(
        console.log
    );

})();