import React, { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

interface DropdownProps {
  options: string[]
  selectedValue?: any
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedValue }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsDropdownOpen(false)
    selectedValue(option)
  }

  console.log(selectedOption)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="bg-[#f7f7f7] w-full px-4 py-3 rounded-xl text-sm cursor-pointer ">
      <div
        className={`flex justify-between items-center ${
          isDropdownOpen ? 'open' : ''
        }`}
        onClick={toggleDropdown}
      >
        {selectedOption || 'Select an option'}
        <span className={`${isDropdownOpen ? 'rotate-180' : ''}`}>
          <IoChevronDown />
        </span>
      </div>
      {isDropdownOpen && (
        <ul className="flex flex-col gap-2 pt-3 absolute bg-[#f7f7f7] w-[278px] -ml-4 px-4 py-3 mt-3 rounded-xl border">
          {options.map((option) => (
            <li
              key={option}
              className="hover:bg-slate-200 py-2 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
