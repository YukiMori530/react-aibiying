import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
    
    position: relative;
    overflow: hidden;
    padding: 8px 0;
    .scroll-content{
        display: flex;
        transition: transform 200ms ease;
    }
`