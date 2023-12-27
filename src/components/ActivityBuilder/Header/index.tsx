import { Upgrade } from 'assets'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const Header = () => {
  return (
    <div className="px-8 py-6 w-full flex flex-row justify-between">
      <div className="flex flex-row gap-3 items-center">
        <IoIosArrowBack />
        <span className="text-xl font-semibold">Activity builder</span>
      </div>
      <div>
        <img src={Upgrade} />
      </div>
    </div>
  )
}

export default Header
