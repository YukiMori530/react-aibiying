import React from 'react';
// import { useSelector } from 'react-redux';
// import { shallowEqual } from 'react-redux';
import { DetailWrapper } from './style';
import DetailPictures from './c-cpns/detail-pictures';
import DetailInfos from './c-cpns/detail-infos';
const Detail = () => {
    // const { detailInfo } = useSelector((state) => ({
    //     detailInfo: state.detail.detailInfo
    // }),shallowEqual)
    return (
        <DetailWrapper>
            <DetailPictures/>
            <DetailInfos/>
        </DetailWrapper>
    );
};

export default Detail;