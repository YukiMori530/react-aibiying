import React from "react";
import { BrowserWrapper } from "./style";
import PropTypes from "prop-types";
import { useEffect } from "react";
import IconClose from "@/assets/svg/icon-close";
const PictureBrowser = (props) => {

    const { pictureUrls, closeClick } = props

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

    return (
        <BrowserWrapper>
            <div className="top">
                <div className="close-btn" onClick={closeClickHandle}>
                    <IconClose />
                </div>
            </div>
            <div className="list">

            </div>
            <div className="indicator">

            </div>
        </BrowserWrapper>
    )
}

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}

export default PictureBrowser