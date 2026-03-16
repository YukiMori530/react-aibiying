import React from "react";
import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import { SectionV2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
const HomeSectionV2 = (props)=>{
    /**从props获取数据 */
    const { infoData } = props

    /**定义内部的store */
    const initName = Object.keys(infoData.dest_list)[0]
    const [name,setName] = useState(initName)
    const tabsNames = infoData.dest_address?.map(item=>item.name)

    /**事件处理函数 */
    const tabClickHandle = useCallback(function (index,name){
        setName(name)
    },[])

    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <SectionTabs tabsNames={tabsNames} tabClick={tabClickHandle}/>
            <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.333333%"/>
        </SectionV2Wrapper>
    )
}

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2