import { HiBuildingOffice } from 'react-icons/hi2'
import { HiLocationMarker } from 'react-icons/hi'
import { BsFillCalendarFill } from 'react-icons/bs'

const WorkItem = () => {
  return (
    <div className="flex justify-between items-baseline py-8 border-b-2">
      <div>
        <h3 className="text-xl">Junior Web Developer</h3>
        <div className="flex gap-20 text-sm">
          <p className="flex items-center gap-1">
            <HiBuildingOffice />
            Dr. Rajkumar’s Learning App
          </p>
          <p className="flex items-center gap-1">
            <HiLocationMarker />
            Bengaluru
          </p>
        </div>
      </div>

      <div className="text-sm">
        <div className="px-5 border rounded flex justify-center">Full Time</div>
        <p className="flex items-center gap-1">
          <BsFillCalendarFill />
          Sep 2021 - Dec 2021
        </p>
      </div>
    </div>
  )
}

export default WorkItem
