import * as actionTypes from './constants';
import { getEntireRoomList } from '@/services/modules/entire';

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
});

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
});

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
});

export const fetchRoomListAction = (page=0)=>{

    
    //新的函数
    return async (dispatch)=>{
        dispatch(changeCurrentPageAction(page))
        const res=await getEntireRoomList(page*20,20)
        const roomList=res.list
        const totalCount=res.totalCount
        dispatch(changeRoomListAction(roomList))  
        dispatch(changeTotalCountAction(totalCount))
    }
}