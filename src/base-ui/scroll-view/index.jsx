import React, { useState, useEffect, useRef } from "react";
import { ScrollViewWrapper } from "./style";
import PropTypes from "prop-types";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = (props)=>{
    /**定义内部的状态 */
    const [showLeft,setShowLeft] =useState(false)
    const [showRight,setShowRight] = useState(false)
    const [posIndex,setPosIndex] = useState(0)
    const totalDistanceRef = useRef()
    
    /**组件渲染完毕，判断是否显示右侧的按钮 */
    const scrollContentRef = useRef()
    useEffect(()=>{
        const scrollWidth = scrollContentRef.current.scrollWidth//一共可以滚动的宽度
        const clientWidth = scrollContentRef.current.clientWidth//本身占据的宽度
        const totalDistance = scrollWidth - clientWidth//总共可以滚动的距离 
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0)//如果可以滚动的宽度大于当前显示的宽度，则显示右侧的按钮
    },[props.children])

    /**事件处理函数 */

    function controlClickHandle(isRight){
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        const newEl=scrollContentRef.current.children[newIndex]
        scrollContentRef.current.style.transform = `translate(-${newEl.offsetLeft}px)`
        setPosIndex(newIndex)
        setShowRight(totalDistanceRef.current > newEl.offsetLeft)//如果可以滚动的距离大于当前元素的偏移量，则显示右侧的按钮
        setShowLeft(newEl.offsetLeft>0)
    }

    return (
        <ScrollViewWrapper>
            {showLeft && (
                <div className="control left" onClick={e=>controlClickHandle(false)}>
                    <IconArrowLeft/>
                </div>
            )}
            {showRight && (
                <div className="control right" onClick={e=>controlClickHandle(true)}>
                    <IconArrowRight/>
                </div>
            )}
            <div className='scroll'>
                <div className="scroll-content" ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ScrollViewWrapper>
    )
}

ScrollView.propTypes = {
    children: PropTypes.node
}

export default ScrollView