import React, { useEffect, useState } from 'react'

interface TabsProp {
  tabsSelect?: any
}

const Tabs: React.FC<TabsProp> = ({ tabsSelect }) => {
  const [tabs, setTabs] = useState(0)

  useEffect(() => {
    if (tabsSelect !== undefined) {
      tabsSelect(tabs)
    }
  }, [tabs, setTabs])

  return (
    <div
      className={`w-full p-[3px] bg-gray-100 rounded-[500px] border border-zinc-200 justify-start items-start flex`}
    >
      <div
        className={`grow shrink basis-0 h-[37px] px-3.5 py-2.5 rounded-[34px]  justify-center items-center gap-2 flex cursor-pointer hover:bg-slate-200 ${
          tabs == 0 &&
          'bg-white border-black border-opacity-10 shadow border text-gray-950'
        }`}
        onClick={() => setTabs(0)}
      >
        <div className="text-zinc-600 text-sm font-semibold font-['Inter']">
          Common App
        </div>
      </div>
      <div
        className={`grow shrink basis-0 h-[37px] px-3.5 py-2.5 rounded-[34px] justify-center items-center gap-2 flex cursor-pointer  hover:bg-slate-200 ${
          tabs == 1 &&
          'bg-white border-black border-opacity-10 shadow border text-gray-950'
        }`}
        onClick={() => setTabs(1)}
      >
        <div className="text-zinc-600 text-sm font-medium font-['Inter']">
          UC App
        </div>
      </div>
    </div>
  )
}

export default Tabs
