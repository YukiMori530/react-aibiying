import React,{useEffect, useState} from 'react';
import hyRequest from '@/services';



const Home = () => {
    //定义状态
    const [highscore , setHighScore]=useState({})

    //网络请求的代码
    useEffect(()=>{
        hyRequest.get({url:"/home/highscore"}).then(res=>{
            setHighScore(res)
        })
    },[])

    return (
        <div>
            <h2>{highscore.title}</h2>
            <h4>{highscore.subtitle}</h4>
            <ul>
                {
                    highscore?.list?.map((item)=>{
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Home;