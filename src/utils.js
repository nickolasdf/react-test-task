import moment from "moment";

export const filterDateRange = (data = [], dateFrom, dateTo) => {
    if(dateFrom && dateTo) {
        return data.filter(item => {
            const itemDateFrom = moment(item.dateFrom);
            const itemDateTo = moment(item.dateTo);
            return itemDateFrom.isSameOrAfter(dateFrom, "day") && itemDateTo.isSameOrBefore(dateTo, "day");
        });
    } else {
        return data;
    }
};

