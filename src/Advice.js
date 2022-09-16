import React, { useState, useEffect } from "react";
import axios from "axios";

import Dice from './assets/icon-dice.svg'
import Divider from './assets/pattern-divider-desktop.svg'

const url = 'https://api.adviceslip.com/advice'

const Advice = () => {
    const [data, setData] = useState(null);

    function refreshPage() {
        window.location.reload(false);
    }

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    /* console.log(data) */

    if (!data) return null

    return (
        <div className="flex justify-center p-4 items-center relative max-w-[350px] space-y-6 md:max-w-lg text-center rounded-md flex-col h-56 bg-[#323A49] ">
            <p className="text-[#52FFA8] text-xs tracking-widest">ADVICE  #{data.slip.id}</p>
            <h2 className="text-[#CEE3E9] text-xl  md:text-xl">“{data.slip.advice}”</h2>
            <div className="pb-7 px-6">
                <img src={Divider} alt="" />
            </div>
            <button type="button" onClick={refreshPage} className="glow absolute r-[50px]  flex items-center justify-center top-[165px] z-10 bg-[#52FFA8] rounded-full w-16 h-16">
                <img src={Dice} alt="" className="" />
            </button>
        </div >
    )
}

export default Advice