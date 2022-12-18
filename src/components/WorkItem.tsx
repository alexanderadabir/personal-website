import { HiBuildingOffice } from 'react-icons/hi2'
import { HiLocationMarker } from 'react-icons/hi'
import { BsFillCalendarFill } from 'react-icons/bs'

interface Props {
  title: string
  address: string
  location?: string
  date: string
  schedule: string
}

const WorkItem = ({ title, address, location, date, schedule }: Props) => {
  return (
    <div className="flex justify-between items-baseline pb-8 border-b-2">
      <div>
        <h3 className="text-xl">{title}</h3>
        <div className="flex text-sm">
          <p className="flex items-center gap-1 min-w-[320px]">
            <HiBuildingOffice />
            {address}
          </p>
          {location && (
            <p className="flex items-center gap-1">
              <HiLocationMarker />
              {location}
            </p>
          )}
        </div>
      </div>

      <div className="text-sm">
        <div className="px-5 border rounded flex justify-center">
          {schedule}
        </div>
        <p className="flex items-center gap-1">
          <BsFillCalendarFill />
          {date}
        </p>
      </div>
    </div>
  )
}

export default WorkItem
