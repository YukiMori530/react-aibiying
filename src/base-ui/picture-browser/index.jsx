import React, { useState, useEffect, useRef } from "react";
import { BrowserWrapper } from "./style";
import PropTypes from "prop-types";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
const PictureBrowser = (props) => {

    const { pictureUrls, closeClick } = props
    const [currentIndex,setCurrentIndex]=useState(0)
    const [isNext,setIsNext]=useState(true)
    const imgRef = useRef(null)

    //当图片浏览器展示出来时，滚动的功能消失
    useEffect(()=>{
        document.body.style.overflow = "hidden"
        return ()=>{
            document.body.style.overflow = "auto"
        }
    },[])

    function closeClickHandle(){
        if(closeClick) closeClick()
    }

    function controlClickHandle(isNext=true){
        let newIndex=isNext?currentIndex+1:currentIndex-1
        if(newIndex<0) newIndex=pictureUrls.length-1
        if(newIndex>=pictureUrls.length) newIndex=0
        setCurrentIndex(newIndex)
        setIsNext(isNext)
    }

    return (
        <BrowserWrapper isNext={isNext}>
            <div className="top">
                <div className="close-btn" onClick={closeClickHandle}>
                    <IconClose />
                </div>
            </div>
            <div className="slider">
                <div className="control">
                    <div className="btn left" onClick={e=>controlClickHandle(false)}>
                        <IconArrowLeft width={77} height={77}/>
                    </div>
                    <div className="btn right" onClick={e=>controlClickHandle(true)}>
                        <IconArrowRight width={77} height={77}/>
                    </div>
                </div>
                <div className="picture">
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            nodeRef={imgRef}
                            key={pictureUrls[currentIndex]}
                            classNames="pic"
                            timeout={200}
                        >
                            <img ref={imgRef} src={pictureUrls[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">

            </div>
        </BrowserWrapper>
    )
}

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}

export default PictureBrowser