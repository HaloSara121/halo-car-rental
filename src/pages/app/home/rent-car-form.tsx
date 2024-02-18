'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon, Car, MapPin } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

const FormSchema = z.object({
  'car-type': z.string({
    required_error: 'A car type is required',
  }),
  'pick-up-location': z.string({
    required_error: 'A pick up location is required',
  }),
  'drop-off-location': z.string({
    required_error: 'A drop off location is required',
  }),
  'pick-up-date': z.date({
    required_error: 'A pick up date is required',
  }),
  'drop-off-date': z.date({
    required_error: 'A drop off date is required',
  }),
})

export const RentCarForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  const pickUpDate = form.watch('pick-up-date')

  useEffect(() => {
    form.resetField('drop-off-date')
  }, [pickUpDate, form])

  return (
    <div className="w-full bg-white rounded-lg max-w-[32rem] lg:max-w-full mx-auto shadow-2xl rounde-md px-4 lg:p-12 py-6 flex items-center flex-col">
      <strong className="font-[Poppins] font-bold text-2xl w-full">
        Book a car
      </strong>

      <div className="w-full mt-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4  items-center"
          >
            <FormField
              control={form.control}
              name="car-type"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="flex items-center gap-4 font-bold">
                    <Car />
                    Car type
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your car type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="audi">Audi A1S-Line</SelectItem>
                      <SelectItem value="golf">VW Golf 6</SelectItem>
                      <SelectItem value="toyota">Toyota Camry</SelectItem>
                      <SelectItem value="bmw">BMW 320 ModernLine</SelectItem>
                      <SelectItem value="mercedes">
                        Mercedes-Benz GLK
                      </SelectItem>
                      <SelectItem value="passat">VW Passat CC</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pick-up-location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-4 font-bold">
                    <MapPin />
                    Pick Up
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your pick up location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="belgrade">Belgrade</SelectItem>
                      <SelectItem value="novi-sad">Novi Sad</SelectItem>
                      <SelectItem value="nis">Nis</SelectItem>
                      <SelectItem value="kragujavec">Kragujavec</SelectItem>
                      <SelectItem value="subotica">Subotica</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="drop-off-location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-4 font-bold">
                    <MapPin />
                    Drop off
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your pick up location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="belgrade">Belgrade</SelectItem>
                      <SelectItem value="novi-sad">Novi Sad</SelectItem>
                      <SelectItem value="nis">Nis</SelectItem>
                      <SelectItem value="kragujavec">Kragujavec</SelectItem>
                      <SelectItem value="subotica">Subotica</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pick-up-date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex items-center gap-4 font-bold">
                    <CalendarIcon />
                    Pick up
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild className="text-black w-full">
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full h-12 pl-3 text-left font-normal',
                            !field.value && 'text-black',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="drop-off-date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="flex items-center gap-4 font-bold">
                    <CalendarIcon className="h-6 w-6" />
                    Drop off
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full h-12 pl-3 text-left font-normal',
                            !field.value && 'text-black',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) =>
                          date <= form.watch('pick-up-date')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="h-12 self-end" type="submit">
              Search
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
