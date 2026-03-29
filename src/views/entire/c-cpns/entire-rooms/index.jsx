import React from "react";
import { RoomsWrapper } from "./style";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = () => {
    /*从redux中获取数据 */
    const { roomList, totalCount, isLoading } = useSelector((state) => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }), shallowEqual)

    

    return (
        <RoomsWrapper>
            <h2 className="title">共{totalCount}处住所</h2>
            <div className="list">
                {
                    roomList.map((item) => {
                        return <RoomItem itemData={item} itemWidth="20%" key={item._id}/>
                    })
                }
            </div>
            { isLoading && <div className="cover"></div> }
        </RoomsWrapper>
    )
}

export default EntireRooms