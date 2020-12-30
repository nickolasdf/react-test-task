import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

import SearchFilters from "./components/SearchFilters";

import HotelList from "./components/HotelsList";

import './App.css';

const WithLoader = ({ loading, children  }) => {
    if(loading) {
        return (
            <div className="spin-wrapper">
                <Spin size="large" />
            </div>
        )
    } else
        return children;
};

function App() {
    const dispatch = useDispatch();
    const hotels = useSelector(state => state.hotels);

    useEffect(() => {
        dispatch({ type: "FETCH_HOTELS" })
    }, [dispatch]);

    const handleSubmit = (data) => {
        const [dateFrom, dateTo] = data.dateRange;

        dispatch({
            type: "FETCH_HOTELS",
            params: {
                dateFrom,
                dateTo
            }
        })
    };

    return (
        <div className="App">
            <div className="content">
                <h1>Best Deals</h1>
                <h2>Check for some amazing deals all year round</h2>
                <SearchFilters onChange={handleSubmit} />
                <WithLoader loading={hotels.isLoading}>
                    <HotelList hotels={hotels.data} />
                </WithLoader>
            </div>
        </div>
    );
}

export default App;
