import React from "react";
import { Rate } from 'antd';
import DateItem from "./DateItem";
import noImage from "../../assets/noimage.jpg";

import "./index.css";

const HotelCard = ({ hotel }) => {
    return (
        <div className="hotel-card">
            <div className="hotel-card__section">
                <img alt="hotel image" src={noImage} className="hotel-card__image"/>
            </div>
            <div className="hotel-card__section hotel-card__info">
                <h2>{hotel.name}</h2>
                <div className="hotel-card__row">
                    <Rate disabled value={hotel.rate} />
                </div>
                <div className="hotel-card__date-range hotel-card__row">
                    <DateItem date={hotel.dateFrom} name="Check-in" />
                    <DateItem date={hotel.dateTo} name="Check-out" />
                </div>
            </div>
        </div>
    )
};

export default HotelCard;