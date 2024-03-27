import ManualCount from "./ManualCount";

interface SeatEstimationFormat {
    "FBD": any[],
}
export interface ManualCountFormat {
    "FBD": {
        "timestamp": {
            "date": string,
            "timezone_type": Number,
            "timezone": string,
        },
        "location_name": string,
        "occupied_seats": Number,
        "free_seats": Number
    }[]
}
interface LocationInfoFormat {
    "location": {
        "FBD": any,
    }
}

interface SeatInfoFormat {
    "manualcount": ManualCountFormat,
    "seatestimate": SeatEstimationFormat,
}

export type ApiResponseFormat = (SeatInfoFormat | LocationInfoFormat)[];

export default class ApiResponse {
    seatEstimates: any;
    manualCounts: ManualCount[] = [];
    locationInfo: any;

    constructor(apiResponseObject: ApiResponseFormat) {
        const seatInfo: SeatInfoFormat = apiResponseObject[0] as SeatInfoFormat;
        const locationInfo: LocationInfoFormat = apiResponseObject[1] as LocationInfoFormat;

        this.seatEstimates = seatInfo.seatestimate["FBD"];
        this.manualCounts = Array.from(seatInfo.manualcount["FBD"]).map(x => new ManualCount(x));
        this.locationInfo = locationInfo.location["FBD"];
    }
}