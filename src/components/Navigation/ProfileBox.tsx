import { ProfilePic } from 'assets'
import { FaArrowRight } from 'react-icons/fa6'

const ProfileBox = () => {
  return (
    <div className="px-3 py-[10px] flex flex-row gap-3">
      <div>
        <img src={ProfilePic} />
      </div>
      <div>
        <span className="text-sm font-semibold">Marvel Gomulya</span>
        <span className="flex flex-row gap-2 text-[#737A81] text-sm font-medium items-center cursor-pointer hover:text-blue-600">
          View profile <FaArrowRight />
        </span>
      </div>
    </div>
  )
}

export default ProfileBox
