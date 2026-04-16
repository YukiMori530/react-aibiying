import React, { useState } from "react";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import classNames from "classnames";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useRef } from "react";

const AppHeader=()=>{

    const [isSearch,setIsSearch] = useState(false)

    const { headerConfig } = useSelector((state) => ({
        headerConfig: state.main.headerConfig
    }),shallowEqual)

    const { isFixed } = headerConfig

    /**监听滚动 */
    const { scrollY } = useScrollPosition()
    const prevY=useRef(0)

    if(!isSearch){
        prevY.current=scrollY
    }
    if(isSearch && Math.abs(scrollY-prevY.current)>30){
        setIsSearch(false)
    }

    return (
        <HeaderWrapper className={classNames({ fixed:isFixed })}>
            <div className="content">
                <div className="top">
                    <HeaderLeft/>
                    <HeaderCenter isSearch={isSearch} searchBarClick={e=>setIsSearch(true)}/>
                    <HeaderRight/>
                </div>
                <SearchAreaWrapper isSearch={isSearch}/>
            </div>
            { isSearch && <div className="cover" onClick={e=>setIsSearch(false)}></div> }
        </HeaderWrapper>
    )
}

export default AppHeader