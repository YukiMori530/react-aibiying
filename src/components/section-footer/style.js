import styled from "styled-components";

export const FooterWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    .info{
        display: flex;
        align-items: center;
        cursor: pointer;

        font-size: 17px;
        color:${props=>props.color};
        font-weight: 700;
        
        &:hover{
            text-decoration: underline;
        }
        .text{
            margin-right: 6px;
        }
        .icon{
            margin-left: 4px;
            width: 16px;
            height: 16px;
        }
    }
`