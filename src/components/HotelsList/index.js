import React from "react";
import { Empty } from 'antd';

import HotelCard from "../HotelCard";

import "./index.css";

const HotelList = ({ hotels = [] }) => {
    return (
        <div className="hotels-list">
            {
                hotels && hotels.length ?
                    hotels.map(hotel => {
                        return (
                            <div key={hotel.id} className="hotels-list__item">
                                <HotelCard hotel={hotel} />
                            </div>
                        )
                    }) :
                    <div className="empty-wrapper">
                        <Empty />
                    </div>
            }
        </div>
    )
};

export default HotelList;