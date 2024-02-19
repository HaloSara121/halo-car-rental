import audi from '@/assets/audi.jpg'
import bmw from '@/assets/bmw.jpg'
import golf from '@/assets/golf.jpg'
import mercedes from '@/assets/mercedes.jpg'
import passat from '@/assets/passat.jpg'
import toyota from '@/assets/toyota.jpg'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const carModals = [
  {
    image: audi,
    value: 'audi',
    price: '$45',
    model: 'Audi',
    mark: 'A1',
    year: '2012',
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Manual',
    fuel: 'Gasoline',
  },
  {
    image: golf,
    value: 'golf',
    price: '$37',
    model: 'Golf 6',
    mark: 'Volkswagen',
    year: '2008',
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    image: toyota,
    value: 'toyota',
    price: '$30',
    model: 'Camry',
    mark: 'Toyota',
    year: '2006',
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Automatic',
    fuel: 'Hybrid',
  },
  {
    image: bmw,
    value: 'bmw',
    price: '$35',
    model: '320',
    mark: 'BMW',
    year: '2012',
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    image: mercedes,
    value: 'mercedes',
    price: '$50',
    model: 'Benz GLK',
    mark: 'Mercedes',
    year: '2006',
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Manual',
    fuel: 'Diesel',
  },
  {
    image: passat,
    value: 'passat',
    price: '$25',
    model: 'Passat CC',
    mark: 'Volkswagen',
    year: '2008',
    doors: '4/5',
    ac: 'Yes',
    transmission: 'Automatic',
    fuel: 'Gasoline',
  },
]

export const VehiclosModels = () => {
  return (
    <section className="relative flex w-full items-center justify-center py-24">
      <div className="container flex flex-col items-center gap-4 self-center">
        <h3 className="text-center text-xl">Vehicles Models</h3>

        <strong className="text-center text-5xl">Our rental fleet</strong>

        <p className="text-center text-zinc-600">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>

        <Tabs
          defaultValue="audi"
          className="container flex w-full flex-col items-center xl:flex-row xl:gap-32"
        >
          <TabsList className="h-full flex-col border-2">
            <TabsTrigger className="w-52 border-b-2 p-4 " value="audi">
              Audi A1 S-Line
            </TabsTrigger>
            <TabsTrigger className="w-52 border-b-2 p-4" value="golf">
              VW Golf 6
            </TabsTrigger>
            <TabsTrigger className="w-52 border-b-2 p-4" value="toyota">
              Toyota Camry
            </TabsTrigger>
            <TabsTrigger className="w-52 border-b-2 p-4" value="bmw">
              BMW 320 ModernLine
            </TabsTrigger>
            <TabsTrigger className="w-52 border-b-2 p-4" value="mercedes">
              Mercedes-Benz GLK
            </TabsTrigger>
            <TabsTrigger className="w-52 p-4" value="passat">
              VW Passat CC
            </TabsTrigger>
          </TabsList>

          {carModals.map((car) => (
            <TabsContent
              key={car.value}
              className="xl:jusrify-between flex-col gap-8 data-[state=active]:flex xl:w-full xl:flex-row"
              value={car.value}
            >
              <img
                src={car.image}
                className="w-full  object-contain"
                alt={`${car.mark} ${car.model} image`}
              />

              <div className="ml-auto flex flex-col items-end justify-center">
                <div className="min-w-[20rem] border-2 border-zinc-700">
                  <div className="border-3 flex justify-center border-primary bg-primary p-4 text-3xl font-bold text-stone-50">
                    {car.price} / per day
                  </div>
                  <div className="relative flex w-full items-center justify-between gap-4 border-b-2 border-zinc-700 px-6 py-3">
                    Model
                    <Separator className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-zinc-700" />
                    {car.model}
                  </div>
                  <div className="relative flex w-full items-center justify-between gap-4 border-b-2 border-zinc-700 px-6 py-3">
                    Mark
                    <Separator className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-zinc-700" />
                    {car.mark}
                  </div>
                  <div className="relative flex w-full items-center justify-between gap-4 border-b-2 border-zinc-700 px-6 py-3">
                    Year
                    <Separator className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-zinc-700" />
                    {car.year}
                  </div>
                  <div className="relative flex w-full items-center justify-between gap-4 border-b-2 border-zinc-700 px-6 py-3">
                    Doors
                    <Separator className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-zinc-700" />
                    {car.doors}
                  </div>
                  <div className="relative flex w-full items-center justify-between gap-4 border-b-2 border-zinc-700 px-6 py-3">
                    AC
                    <Separator className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-zinc-700" />
                    {car.ac}
                  </div>
                  <div className="relative flex w-full items-center justify-between gap-4 border-b-2 border-zinc-700 px-6 py-3">
                    Transmission
                    <Separator className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-zinc-700" />
                    {car.transmission}
                  </div>
                  <div className="relative flex w-full items-center justify-between gap-4 px-6 py-3">
                    Fuel
                    <Separator className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-zinc-700" />
                    {car.fuel}
                  </div>
                </div>

                <Button className="mt-4 h-12 w-[20rem] text-xl font-bold hover:border hover:border-primary hover:text-primary">
                  Reserve now
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
