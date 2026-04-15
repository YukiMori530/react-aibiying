import React from "react";
import { CSSTransition } from "react-transition-group";

import { CenterWrapper } from "./style";
import SearchTabs from "./c-cpns/search-tabs";
import SearchSections from "./c-cpns/search-sections";
import SearchTitles from "@/assets/data/search_titles.json";
import { useRef, useState } from "react";
import IconSearchBar from "@/assets/svg/icon-search-bar";

const HeaderCenter = (props)=>{
    const { isSearch, searchBarClick } = props
    const [tabIndex, setTabIndex] = useState(0)
    const searchBarRef = useRef(null)
    const searchDetailRef = useRef(null)
    const titles = SearchTitles?.map(item => item.title) ?? []
    const searchInfos = SearchTitles?.map(item => item.searchInfos) ?? []
    const currentSearchInfos = searchInfos[tabIndex] ?? []

    function searchClickHandle(){
        if(searchBarClick) searchBarClick()
    }
    return (
        <CenterWrapper>
            <CSSTransition
            nodeRef={searchBarRef}
            in={!isSearch}
            timeout={250}
            classNames="bar"
            unmountOnExit={true}
            >
                <div ref={searchBarRef} className="search-bar" onClick={searchClickHandle}>
                        <div className="text">
                            搜索房源和体验
                        </div>
                        <div className="icon">
                            <IconSearchBar/>
                        </div>
                    </div>
            </CSSTransition>
                    
                    <CSSTransition
                    nodeRef={searchDetailRef}
                    in={isSearch}
                    timeout={250}
                    classNames="detail"
                    unmountOnExit={true}
                    >
                    <div ref={searchDetailRef} className="search-detail">
                        <SearchTabs titles={titles} tabClick={setTabIndex}/>
                            <div className="infos">
                        <SearchSections searchInfos={currentSearchInfos}/>
                    </div>
                    </div>
                    </CSSTransition>
            
        </CenterWrapper>
    )
}

export default HeaderCenter