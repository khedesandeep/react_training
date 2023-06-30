import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
const Widget = ({ type,test }) => {
    let data;

    const intensity = test.filter(topic => topic.topic === 'oil')
    let intensityPercentage = Math.floor(intensity.length / test.length * 100);

    const topic = test.filter(topic => topic.pestle === "Economic")
    let topicPercentage = Math.floor(topic.length / test.length * 100);


    const energy = test.filter(sector => sector.sector === "Energy")
    let energyPercentage = Math.floor(energy.length / test.length * 100);

    const pestle = test.filter(pestle => pestle.pestle === "Industries")
    let pestlePercentage = Math.floor(pestle.length / test.length * 100);


    switch (type) {
        case "intensity":
            data = {
                title: "INTENSITY",
                isMoney: false,
                diff: intensityPercentage,
                count:intensity.length,
                link: "OIL",
                icon: <OilBarrelIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2"}} />
            };
            break;

        case "topic":
            data = {
                title: "TOPIC",
                isMoney: false,
                diff: topicPercentage,
                count:topic.length,
                link: "ECONOMICS",
                icon: <CurrencyExchangeIcon className='icon' style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}} />
            };
            break;


        case "sector":
            data = {
                title: "SECTOR",
                isMoney: false,
                diff: energyPercentage,
                count:energy.length,
                link: "Energy",
                icon: <MonetizationOnOutlinedIcon className='icon' style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}  />
            };
            break;



        case "pestle":
            data = {
                title: "PESTLE",
                isMoney: false,
                diff: pestlePercentage,
                count:pestle.length,
                link: "See details",
                icon: <AccountBalanceOutlinedIcon className='icon' style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}} />
            };
            break;

        default:
            break;
    }


    return (
        <div className='flex w-full justify-bewtween p-10 border border-lg border-gray-100 justify-between'>
            <div className="flex flex-col justify-between">
                <span className="font-bold">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {data.count}</span>
                <span className="max-w">{data.link}</span>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex">
                    <KeyboardArrowUpIcon />
                    {data.diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget