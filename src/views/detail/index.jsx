import React from 'react';
// import { useSelector } from 'react-redux';
// import { shallowEqual } from 'react-redux';
import { DetailWrapper } from './style';
import DetailPictures from './c-cpns/detail-pictures';
import DetailInfos from './c-cpns/detail-infos';
import { changeHeaderConfigAction } from '@/store/modules/main';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Detail = () => {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(changeHeaderConfigAction({ isFixed:false,topAlpha:false }))
    },[dispatch])

    return (
        <DetailWrapper>
            <DetailPictures/>
            <DetailInfos/>
        </DetailWrapper>
    );
};

export default Detail;