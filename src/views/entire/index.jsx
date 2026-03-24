import React from 'react';
import { EntireWrapper } from './style';
import EntireFilter from './c-cpns/entire-filter';
import EntireRooms from './c-cpns/entire-rooms';
import EntirePagination from './c-cpns/entire-pagination';
const Entire = () => {
    return (
        <EntireWrapper>
            <EntireFilter/>
            <EntireRooms/>
            <EntirePagination/>
        </EntireWrapper>
    );
};

export default Entire;