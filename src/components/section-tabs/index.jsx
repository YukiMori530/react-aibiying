import React from "react";
import { TabsWrapper } from "./style";
import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = (props)=>{

    const { tabsNames = [], tabClick } = props
    const [currentIndex, setCurrentIndex] = useState(0)

    function itemClickHandle(index,item){
        setCurrentIndex(index)  
        tabClick(index,item)
    }

    return (
        <TabsWrapper>
            <ScrollView>
            {
                tabsNames.map((item,index)=>{
                    return (
                        <div 
                        key={index}
                        className={classNames("item",{active: currentIndex === index})}
                        onClick={e=>itemClickHandle(index,item)}
                        >
                            {item}
                        </div>
                    )
                })
            }
            </ScrollView>
        </TabsWrapper>
    )
}

SectionTabs.propTypes = {
    tabsNames: PropTypes.array,
    tabClick: PropTypes.func
}

export default SectionTabs