import React from "react";
import { PaginationWrapper } from "./style";
import Pagination from '@mui/material/Pagination';
import { useSelector } from "react-redux";

const EntirePagination = () => {

    const {currentPage, totalCount, roomList} =useSelector((state)=>({
        currentPage: state.entire.currentPage,
        totalCount: state.entire.totalCount,
        roomList: state.entire.roomList,
    }))

    const totalPage = Math.ceil(totalCount / 20)
    const startCount = currentPage * 20 + 1
    const endCount = (currentPage + 1) * 20

    return (
        <PaginationWrapper>
            {
                !!roomList.length && (
                    <div className="info">
                    <Pagination count={totalPage}/>
                     <div className="desc">
                         第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
                    </div>
                    </div>
                )
            }
        </PaginationWrapper>
    )
}

export default EntirePagination