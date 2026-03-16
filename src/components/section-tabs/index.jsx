import React from "react";
import { TabsWrapper } from "./style";
import PropTypes from "prop-types";
import { useState } from "react";
import classNames from "classnames";

const SectionTabs = (props)=>{

    const { tabsNames = [] } = props
    const [currentIndex, setCurrentIndex] = useState(0)

    function itemClickHandle(index){
        setCurrentIndex(index)
    }

    return (
        <TabsWrapper>
            {
                tabsNames.map((item,index)=>{
                    return (
                        <div 
                        key={index}
                        className={classNames("item",{active: currentIndex === index})}
                        onClick={e=>itemClickHandle(index)}
                        >
                            {item}
                        </div>
                    )
                })
            }
        </TabsWrapper>
    )
}

SectionTabs.propTypes = {
    tabsNames: PropTypes.array
}

export default SectionTabs