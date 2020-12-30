import React from "react";
import "./DateItem.css";

const DateItem = ({ date, name }) => {
    return (
        <div className="date-item">
            <span className="date-item__name">{name}</span>
            <span className="date-item__date">{date}</span>
        </div>
    )
};

export default DateItem;