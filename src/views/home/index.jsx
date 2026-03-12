import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { ConfigProvider,Button } from 'antd';
// import {Button} from '@mui/material';

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
            {/* <ConfigProvider theme={customTheme}>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </ConfigProvider> */}
            {/* <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button> */}
        </HomeWrapper>
    );
};

export default Home;