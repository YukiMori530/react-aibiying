import React from "react";
import { BrowserWrapper } from "./style";
import PropTypes from "prop-types";
import { useEffect } from "react";
const PictureBrowser = () => {

    //当图片浏览器展示出来时，滚动的功能消失
    useEffect(()=>{
        document.body.style.overflow = "hidden"
        return ()=>{
            document.body.style.overflow = "auto"
        }
    },[])

    return (
        <BrowserWrapper>
            
        </BrowserWrapper>
    )
}

PictureBrowser.propTypes = {
    
}

export default PictureBrowser