import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { ConfigProvider,Button } from 'antd';
import Rating from '@mui/material/Rating'

import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

// const customTheme = {
//     token: { colorPrimary: '#1DA57A' },
// };

const Home = () => {
    /**从redux中获取数据 */
    const {goodPriceInfo} = useSelector((state)=>({
        goodPriceInfo: state.home.goodPriceInfo
    }),shallowEqual)

    
    //发起进行的网络请求
    /**派发异步的事件 */
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchHomeDataAction())
    },[dispatch])


    console.log(goodPriceInfo)

    return (
        <HomeWrapper>
            <HomeBanner/>
            <div className="content">
                <div className="good-price">
                <SectionHeader title={goodPriceInfo.title}/>
                <ul className="room-list">
                    {
                        goodPriceInfo.list?.slice(0,8)?.map(item => {
                            return <RoomItem itemData={item} key={item.id}/>
                        })
                    }
                </ul>
                </div>
            </div>     
        </HomeWrapper>
    );
};

export default Home;