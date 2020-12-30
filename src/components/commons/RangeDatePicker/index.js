import React from "react";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const RangeDatePicker = (props) => {
    return (
        <RangePicker {...props}/>
    )
};

export default RangeDatePicker;