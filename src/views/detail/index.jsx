import React from 'react';
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
const Detail = () => {
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }),shallowEqual)
    return (
        <div>{detailInfo.name}</div>
    );
};

export default Detail;