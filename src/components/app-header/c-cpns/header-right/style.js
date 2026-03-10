import styled from "styled-components";

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    color: ${props=>props.theme.text.primaryColor};
    
    font-weight: 600;

    .btns {
        display: flex;
        align-items: center;

        .btn{
            height: 18px;
            line-height: 18px;
            padding: 12px 15px;
            border-radius: 22px;
            cursor: pointer;
            box-sizing: content-box;

            &:hover {
                background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)": "#f5f5f5"};
            }
        }
    }
    
    .profile{
        display: flex;
        align-items: center;
        width: 77px;
        height: 42px;
        margin-right: 24px;
        justify-content: space-evenly;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        color: #999;
        cursor: pointer; 

        ${props=>props.theme.mixin.boxShadow};
    }
`