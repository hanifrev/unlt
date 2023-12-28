import React, { useState, ChangeEvent, useRef } from 'react'
import { FaHistory } from 'react-icons/fa'
import { IoChevronDown } from 'react-icons/io5'
import { FiRefreshCcw } from 'react-icons/fi'
import { LuTrash } from 'react-icons/lu'
import { Generate, Star } from 'assets'

interface CharacterCounterProps {
  label: string
  maxCharacterCount: number
  selectedValue?: any
}

const InputHistory: React.FC<CharacterCounterProps> = ({
  label,
  maxCharacterCount,
  selectedValue
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [showHistory, setShowHistory] = useState(false)
  const [history, setHistory] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  console.log(history)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    // Check if the new value exceeds the character limit
    if (newValue.length <= maxCharacterCount) {
      setInputValue(newValue)
    }
  }

  const handleInputSubmit = () => {
    // Update history with the current input value when the image is clicked
    if (inputValue) {
      setHistory((prevHistory) => [inputValue, ...prevHistory])
      selectedValue(inputValue)
      setInputValue('') // Optionally clear the input value after adding to history
      setShowHistory(true)
    }

    // Focus on the input when the image is clicked
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleDelete = (index: number) => {
    // Delete the entry at the specified index from the history
    const updatedHistory = [...history]
    updatedHistory.splice(index, 1)
    setHistory(updatedHistory)
  }

  const handlePressEnter = (event: any) => {
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
      // Call handleImageClick when Enter is pressed
      event.preventDefault() // Prevents the default behavior of the Enter key
      handleInputSubmit()
    }
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center pb-2">
        <div className="text-neutral-400 text-sm font-medium w-[157px]">
          {label}
        </div>
        <img
          src={Generate}
          className="cursor-pointer"
          onClick={handleInputSubmit}
        />
      </div>
      <input
        className="w-full  px-4 py-3 rounded-xl bg-[#f7f7f7] font-medium text-sm break-all"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handlePressEnter}
      />
      <div className="flex flex-row justify-between text-neutral-400 text-[13px] pt-[10px]">
        <span
          className="flex flex-row items-center gap-1 cursor-pointer"
          onClick={() => setShowHistory(!showHistory)}
        >
          <FaHistory />
          History
          <IoChevronDown className={`${showHistory ? 'rotate-180' : ''}`} />
        </span>
        {inputValue.length}/{maxCharacterCount} characters
      </div>
      {showHistory && (
        <div className="mt-5 p-2 h-[252px] w-full bg-[#f7f7f7] rounded-xl flex flex-col gap-[10px] overflow-auto">
          {history.map((item, index) => (
            <div className="bg-white rounded-xl p-[14px]" key={index}>
              <span className="font-medium text-sm">{item}</span>
              <div className="pt-3 flex flex-row justify-between">
                <div className="flex flex-row gap-3 items-center">
                  <span className="flex flex-row gap-1 items-center text-[13px] text-neutral-500 cursor-pointer">
                    <FiRefreshCcw /> Reuse
                  </span>
                  <span
                    className="flex flex-row gap-1 items-center text-[13px] text-red-500 hover:text-red-300 cursor-pointer"
                    onClick={() => handleDelete(index)}
                  >
                    <LuTrash /> Delete
                  </span>
                </div>
                <div className="text-xs text-neutral-500">43 min ago</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default InputHistory
