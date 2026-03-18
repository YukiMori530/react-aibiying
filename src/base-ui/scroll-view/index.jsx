import React, { useState, useEffect, useRef } from "react";
import { ScrollViewWrapper } from "./style";
import PropTypes from "prop-types";

const ScrollView = (props)=>{
    /**定义内部的状态 */
    const [showRight,setShowRight] = useState(false)

    /**组件渲染完毕，判断是否显示右侧的按钮 */
    const scrollContentRef = useRef()
    useEffect(()=>{
        const scrollWidth = scrollContentRef.current.scrollWidth//一共可以滚动的宽度
        const clientWidth = scrollContentRef.current.clientWidth//本身占据的宽度
        setShowRight(scrollWidth > clientWidth)//如果可以滚动的宽度大于当前显示的宽度，则显示右侧的按钮
    },[props.children])

    return (
        <ScrollViewWrapper>
            <button>左边按钮</button>
            {showRight && <button>右边按钮</button>}
            <div className="scroll-content" ref={scrollContentRef}>
                {props.children}
            </div>
        </ScrollViewWrapper>
    )
}

ScrollView.propTypes = {
    children: PropTypes.node
}

export default ScrollView