import { ExportDoc, SortHead } from 'assets'
import React from 'react'

const ListHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold">
          Common App activity lists
        </span>
        <span className="text-neutral-500 font-medium">activities</span>
      </div>
      <div className="flex flex-row gap-3">
        <img src={SortHead} />
        <img src={ExportDoc} />
      </div>
    </div>
  )
}

export default ListHeader
