import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { ConfigProvider,Button } from 'antd';


import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-list";

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
                <SectionRooms roomList={goodPriceInfo.list}/>
                </div>
            </div>     
        </HomeWrapper>
    );
};

export default Home;