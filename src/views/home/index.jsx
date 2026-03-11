import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";

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

    return (
        <HomeWrapper>
            <HomeBanner/>
            <div className="content">
                <h2>{goodPriceInfo.title}</h2>
                <ul>
                    {
                        goodPriceInfo.list.map(item => {
                            return <li key={item.id}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        </HomeWrapper>
    );
};

export default Home;