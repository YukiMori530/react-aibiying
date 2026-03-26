import React from "react";
import { RoomsWrapper } from "./style";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = () => {
    /*从redux中获取数据 */
    const { roomList, totalCount } = useSelector((state) => ({
        roomList: state.entire.roomList,
        totalCount: state.entire.totalCount
    }), shallowEqual)

    return (
        <RoomsWrapper>
            <h2 className="title">共{totalCount}处住所</h2>
            <div className="list">
                {
                    roomList.map((item) => {
                        return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
                    })
                }
            </div>
        </RoomsWrapper>
    )
}

export default EntireRooms