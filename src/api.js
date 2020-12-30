import hotels from "./hotelsData.json";
import { filterDateRange } from "./utils";

export const getHotels = (params = {}) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(filterDateRange(hotels.data, params.dateFrom, params.dateTo));
        }, 500);
    })
};

