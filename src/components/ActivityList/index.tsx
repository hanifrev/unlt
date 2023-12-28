import React from 'react'
import ListHeader from './Header'
import { FaPlus } from 'react-icons/fa6'

interface ListProp {
  builderData: any
}

const ActivityList: React.FC<ListProp> = ({ builderData }) => {
  console.log(builderData)

  return (
    <div className="px-8 pt-6 flex flex-col gap-[18px]">
      <ListHeader />
      {builderData?.length >= 0 ? (
        <div className="flex flex-col px-5 py-6 rounded-[20px] shadow border border-blue-600 w-full bg-white">
          cok
        </div>
      ) : (
        <div className="text-[#1A5BC5] text-base font-semibold flex flex-row justify-center items-center gap-2 px-[18px] py-[10px] bg-[#ECF3FF] hover:bg-sky-100 cursor-pointer rounded-xl">
          <FaPlus />
          Add more activity
        </div>
      )}
    </div>
  )
}

export default ActivityList
