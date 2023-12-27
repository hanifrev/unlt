import {
  BookingIcon,
  ChatIcon,
  GearIcon,
  HomeIcon,
  Logo,
  MentorIcon,
  ModulesIcon,
  ToolsIcon,
  box
} from 'assets'
import React, { ComponentType, SVGAttributes } from 'react'
import CardLite from './CardLite'
import ProfileBox from './ProfileBox'

interface ItemNav {
  title: string
  icon: ComponentType<SVGAttributes<SVGElement>> | any
  active?: boolean
}

const itemsNav: ItemNav[] = [
  {
    title: 'Home',
    icon: HomeIcon
  },
  {
    title: 'Mentor',
    icon: MentorIcon
  },
  {
    title: 'Module',
    icon: ModulesIcon
  },
  {
    title: 'Tools',
    icon: ToolsIcon,
    active: true
  },
  {
    title: 'Message',
    icon: ChatIcon
  },
  {
    title: 'Booking',
    icon: BookingIcon
  }
]

const Navigation = () => {
  return (
    <aside className="flex flex-col sticky h-screen justify-between max-w-[235px] w-full border-r border-r-[#F3F5F7] py-[26px] px-[18px] top-0">
      <div className="flex flex-col gap-[42px]">
        <div className="flex flex-row justify-between">
          <img src={Logo} />
          <img src={box} />
        </div>
        <div>
          {itemsNav.map((item: ItemNav) => {
            return (
              <div
                className={`flex flex-row gap-[10px] font-base font-medium text-[#5F666C] px-3 py-[10px] hover:text-[#1A5BC5] cursor-pointer ${
                  item.active && 'bg-[#ECF3FF] rounded-xl'
                }`}
              >
                <img src={item.icon} />
                <span>{item.title}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[14px]">
        <div className="flex flex-row gap-[10px] font-base font-medium text-[#5F666C] px-3 py-[10px] hover:text-[#1A5BC5] cursor-pointer">
          <img src={GearIcon} />
          <span>Settings</span>
        </div>
        <CardLite />
        <ProfileBox />
      </div>
    </aside>
  )
}

export default Navigation
