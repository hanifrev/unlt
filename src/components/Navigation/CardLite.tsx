import { BarDummy, Sparkle } from 'assets'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const CardLite = () => {
  return (
    <div className="p-3 rounded-[14px] bg-[#F3F5F7] shadow-inner border border-black border-opacity-5 flex-col justify-start items-start gap-[18px] flex">
      <div className="flex flex-row justify-between w-full">
        <img src={Sparkle} />
        <span className="text-sm">
          <b>240</b>/500
        </span>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="text-sm font-semibold">Lite Credits</div>
        <img src={BarDummy} />
        <div className="text-[#9DA3A9] text-[11px] font-medium flex flex-row items-center justify-between w-full">
          Get more or unlimited credits <FaArrowRight />
        </div>
      </div>
    </div>
  )
}

export default CardLite
