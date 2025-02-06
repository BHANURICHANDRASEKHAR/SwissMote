import React, { useState } from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export default function Filters({ OriginalData, setFilteredData }) {
    const [dateRange, setDateRange] = useState([]);  
    function handleDateChange(dates, dateStrings) {
        setDateRange(dateStrings);
        applyFilters(dateStrings);
    }

    function applyFilters(dates) {
        let filteredData = [...OriginalData];
        if (dates.length === 2 && dates[0] && dates[1]) {
            const [start, end] = dates;
            filteredData = filteredData.filter(item => {
                const eventDate = new Date(item.Event_StartDate);
                return eventDate >= new Date(start) && eventDate <= new Date(end);
            });
        }

        setFilteredData(filteredData);
       
    }

    return (
        <div className='row mb-4 d-flex justify-content-end'>
            <div className='col-4'>
                <label className='mb-2'>Apply Filter Based On Date</label>
                <RangePicker onChange={handleDateChange} className='w-100' />
            </div>
        </div>
    );
}
