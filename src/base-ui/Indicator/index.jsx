import React from "react";
import { IndicatorWrapper } from "./style";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
const Indicator = (props)=>{

    const { selectIndex } = props
    const contentRef = useRef()

    useEffect(()=>{
        const selectItemEl = contentRef.current.children[selectIndex]
        const itemLeft = selectItemEl.offsetLeft
        const itemWidth=selectItemEl.clientWidth

        const contentWidth=contentRef.current.clientWidth
        const contentScroll=contentRef.current.scrollWidth
        //获取selectIndex要滚动的距离
        let distance = itemLeft+itemWidth*0.5-contentWidth*0.5

        if(distance < 0) distance=0//左边特殊情况
        const totalDistance=contentScroll-contentWidth
        if(distance>totalDistance)distance=totalDistance//右边特殊情况

        contentRef.current.style.transform=`translate(${-distance}px)`

    },[selectIndex])

    return (
        <IndicatorWrapper>
            <div className="i-content" ref={contentRef}>
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>
    )
}

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator