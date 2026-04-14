import React from "react";
import { CenterWrapper } from "./style";
import SearchTabs from "./c-cpns/search-tabs";
import SearchSections from "./c-cpns/search-sections";
import SearchTitles from "@/assets/data/search_titles.json";
import { useState } from "react";

const HeaderCenter = ()=>{
    const [tabIndex, setTabIndex] = useState(0)
    const titles = SearchTitles?.map(item => item.title) ?? []
    const searchInfos = SearchTitles?.map(item => item.searchInfos) ?? []
    const currentSearchInfos = searchInfos[tabIndex] ?? []
    return (
        <CenterWrapper>
            {/* <div className="search-bar">
                <div className="text">
                    搜索房源和体验
                </div>
                <div className="icon">
                    <IconSearchBar/>
                </div>
            </div> */}
            <div className="search-detail">
                <SearchTabs titles={titles} tabClick={setTabIndex}/>
                <div className="infos">
                    <SearchSections searchInfos={currentSearchInfos}/>
                </div>
            </div>
        </CenterWrapper>
    )
}

export default HeaderCenter