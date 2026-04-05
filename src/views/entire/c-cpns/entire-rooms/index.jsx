import React, { useCallback } from "react";
import { RoomsWrapper } from "./style";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeDetailInfoAction } from "@/store/modules/detail";
const EntireRooms = () => {
    /*从redux中获取数据 */
    const { roomList, totalCount, isLoading } = useSelector((state) => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }), shallowEqual)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const itemClickHandle=useCallback((item)=>{
        dispatch(changeDetailInfoAction(item))
        navigate(`/detail`)
    },[navigate,dispatch])

    return (
        <RoomsWrapper>
            <h2 className="title">共{totalCount}处住所</h2>
            <div className="list">
                {
                    roomList.map((item) => {
                        return (
                        <RoomItem 
                          itemData={item} 
                          itemWidth="20%" 
                          key={item._id}
                          itemClick={itemClickHandle}
                          />
                        )
                    })
                }
            </div>
            { isLoading && <div className="cover"></div> }
        </RoomsWrapper>
    )
}

export default EntireRooms