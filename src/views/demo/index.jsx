import React from "react";
import Indicator from "@/base-ui/Indicator";
import { DemoWrapper } from "./style";

const Demo = () => {

    const names=["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]
    return (
        <DemoWrapper>
            <div className="control">
                <button>上一个</button>
                <button>下一个</button>
            </div>
            <div className="list">
                <Indicator>
                    {
                        names.map((item)=>{
                            return <button key={item}>{item}</button>
                        })
                    }
                </Indicator>
            </div>
        </DemoWrapper>
    );
};

export default Demo;