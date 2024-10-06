import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { CiCalendar } from 'react-icons/ci';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the default styles
import 'react-date-range/dist/theme/default.css'; // Import the default theme
import format from 'date-fns/format';

const DatePickerComponent = () => {
    const [isPickerOpen, setPickerOpen] = useState(false);
    const [selectedRange, setSelectedRange] = useState('Select Date Range');
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const handleSelect = (ranges) => {
        const { selection } = ranges;
        setState([selection]);
        setSelectedRange(`${format(selection.startDate, 'dd/MM/yyyy')} - ${format(selection.endDate, 'dd/MM/yyyy')}`);
    };

    const handleApply = () => {
        setPickerOpen(false);
    };

    return (
        <div className='bg-black text-white text-sm border h-9 items-center gap-1 ps-2 px-1 rounded-md border-[#4F4F4F] hover:bg-transparent flex justify-center space-x-4'>
            <button
                className='flex gap-2'
                onClick={() => setPickerOpen(!isPickerOpen)}
            >
                <CiCalendar size={24} />
                {selectedRange}
                <IoMdArrowDropdown size={24} />
            </button>
            {isPickerOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 125,
                        right: 0,
                        display: 'grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                    }}
                >
                    <DateRange
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        onChange={handleSelect} // Add this line
                        className="text-gray-900"
                    />
                    <button
                        className='bg-black text-white text-sm border h-9 items-center gap-1 ps-2 px-1 border-[#4F4F4F] flex justify-center space-x-4'
                        onClick={handleApply}
                    >
                        Apply
                    </button>
                </div>
            )}
        </div>
    );
};

export default DatePickerComponent;
