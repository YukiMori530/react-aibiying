import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
// import { ConfigProvider,Button } from 'antd';


import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";

// const customTheme = {
//     token: { colorPrimary: '#1DA57A' },
// };

const Home = () => {



    /**从redux中获取数据 */
    const {goodPriceInfo, highScoreInfo, discountInfo} = useSelector((state)=>({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo
    }),shallowEqual)

    /**数据的转换 */
    const [name,setName] = useState("佛山")
    const tabsNames = discountInfo.dest_address?.map(item=>item.name)

    const tabClickHandle = useCallback(function (index,name){
        setName(name)
    },[])

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
                <div className="discount">
                    <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
                    <SectionTabs tabsNames={tabsNames} tabClick={tabClickHandle}/>
                    <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth="33.333333%"/>
                </div>

                <HomeSectionV1 infoData={goodPriceInfo}/>
                <HomeSectionV1 infoData={highScoreInfo}/>
            </div>     
        </HomeWrapper>
    );
};

export default Home;