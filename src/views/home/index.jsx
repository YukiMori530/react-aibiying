import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { ConfigProvider,Button } from 'antd';


import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";

// const customTheme = {
//     token: { colorPrimary: '#1DA57A' },
// };

const Home = () => {
    /**从redux中获取数据 */
    const {goodPriceInfo, highScoreInfo} = useSelector((state)=>({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo
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
                <HomeSectionV1 infoData={goodPriceInfo}/>
                <HomeSectionV1 infoData={highScoreInfo}/>
            </div>     
        </HomeWrapper>
    );
};

export default Home;