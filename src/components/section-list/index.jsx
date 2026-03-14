import React from "react";
import PropTypes from "prop-types";
import RoomItem from "../room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = (props=>{

    const { roomList = [] } = props

    return (
        <RoomsWrapper>
                    {
                        roomList?.slice(0,8)?.map(item => {
                            return <RoomItem itemData={item} key={item.id}/>
                        })
                    }
        </RoomsWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array
}

export default SectionRooms