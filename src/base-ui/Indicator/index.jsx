import React from "react";
import { IndicatorWrapper } from "./style";
import PropTypes from "prop-types";

const Indicator = (props)=>{
    return (
        <IndicatorWrapper>
            <div className="i-content">
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>
    )
}

Indicator.propTypes = {

}

export default Indicator