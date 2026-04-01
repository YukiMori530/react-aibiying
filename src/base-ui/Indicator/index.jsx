import React from "react";
import { IndicatorWrapper } from "./style";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
const Indicator = (props)=>{

    const { selectIndex } = props
    const contentRef = useRef()
    useEffect(()=>{
        const selectItemEl = contentRef.current.children[selectIndex]
        const itemElOffsetLeft = selectItemEl.offsetLeft
        //获取selectIndex要滚动的距离
        const distance = ``

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