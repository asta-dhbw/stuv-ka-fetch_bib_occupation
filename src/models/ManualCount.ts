import { getDateWithTimeZone } from "../helper";
import { ManualCountFormat } from "./ApiResponse";

export default class ManualCount {
    time: any;
    locationName: any;
    occupiedSeats: any;
    freeSeats: any;

    constructor(apiResponseObject: ManualCountFormat["FBD"][0]) {
        const date = getDateWithTimeZone(apiResponseObject.timestamp.date, apiResponseObject.timestamp.timezone);

        this.time = date;
        this.freeSeats = apiResponseObject.free_seats;
        this.occupiedSeats = apiResponseObject.occupied_seats;
        this.locationName = apiResponseObject.location_name;
    }
}