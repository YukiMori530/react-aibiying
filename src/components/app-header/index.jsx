import React from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./c-cpns/header-left";
import HeaderCenter from "./c-cpns/header-center";
import HeaderRight from "./c-cpns/header-right";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import classNames from "classnames";

const AppHeader=()=>{

    const { headerConfig } = useSelector((state) => ({
        headerConfig: state.main.headerConfig
    }),shallowEqual)

    const { isFixed } = headerConfig

    return (
        <HeaderWrapper className={classNames({ fixed:isFixed })}>
        <HeaderLeft/>
        <HeaderCenter/>
        <HeaderRight/>
        </HeaderWrapper>
    )
}

export default AppHeader