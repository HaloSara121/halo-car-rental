import { Calendar, Car, MapPin } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const RentCarForm = () => {
  return (
    <form className="w-full bg-white max-w-[40rem] rounde-md px-4 py-6 flex items-center flex-col">
      <strong className="font-[Poppins] font-bold text-2xl w-full">
        Book a car
      </strong>

      <div className="w-full space-y-4 mt-8">
        <SelectGroup className="">
          <SelectLabel className="-ml-6 flex items-center gap-4">
            <Car />
            Car type
          </SelectLabel>
          <Select>
            <SelectTrigger className="w-full h-12">
              <SelectValue placeholder="Select your car type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </SelectGroup>

        <SelectGroup className="">
          <SelectLabel className="-ml-6 flex items-center gap-4">
            <MapPin />
            Pick-up
          </SelectLabel>
          <Select>
            <SelectTrigger className="w-full h-12">
              <SelectValue placeholder="Select pick up location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </SelectGroup>

        <SelectGroup className="">
          <SelectLabel className="-ml-6 flex items-center gap-4">
            <MapPin />
            Drop off
          </SelectLabel>
          <Select>
            <SelectTrigger className="w-full h-12">
              <SelectValue placeholder="Select drop off location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </SelectGroup>

        <SelectGroup className="">
          <SelectLabel className="-ml-6 flex items-center gap-4">
            <Calendar />
            Pick up
          </SelectLabel>

          <DatePicker />
        </SelectGroup>

        <SelectGroup className="">
          <SelectLabel className="-ml-6 flex items-center gap-4">
            <Calendar />
            Drop off
          </SelectLabel>

          <DatePicker />
        </SelectGroup>

        <Button>Search</Button>
      </div>
    </form>
  )
}
