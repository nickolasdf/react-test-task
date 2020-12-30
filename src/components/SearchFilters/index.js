import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from 'antd';

import RangeDatePicker from "../commons/RangeDatePicker";

import "./index.css";

const SearchFilters = ({ onChange = () => {} }) => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        onChange(data);
    }

    return (
        <div className="search-filters">
            <form onSubmit={handleSubmit(onSubmit)} className="search-filters__form">
                <Controller
                    name="dateRange"
                    control={control}
                    defaultValue=""
                    render={({ onChange, value}) => (
                        <RangeDatePicker className="search-filters__date-picker" value={value} onChange={onChange}/>
                    )}
                />
                <Button htmlType="submit">Submit</Button>
            </form>
        </div>
    )
};

export default SearchFilters;