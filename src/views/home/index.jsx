import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";

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
                <ul>
                    {
                        goodPriceInfo.list.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })
                    }
                </ul>
                </div>
            </div>
        </HomeWrapper>
    );
};

export default Home;