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
    <section className="py-24 justify-center w-full flex items-center relative">
      <div className="container self-center flex flex-col items-center gap-4">
        <h3 className="text-center text-xl">Vehicles Models</h3>

        <strong className="text-5xl text-center">Our rental fleet</strong>

        <p className="text-zinc-600 text-center">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>

        <Tabs
          defaultValue="audi"
          className="flex flex-col xl:gap-32 xl:flex-row container items-center w-full"
        >
          <TabsList className="flex-col border-2 h-full">
            <TabsTrigger className="p-4 w-52 border-b-2 " value="audi">
              Audi A1 S-Line
            </TabsTrigger>
            <TabsTrigger className="p-4 w-52 border-b-2" value="golf">
              VW Golf 6
            </TabsTrigger>
            <TabsTrigger className="p-4 w-52 border-b-2" value="toyota">
              Toyota Camry
            </TabsTrigger>
            <TabsTrigger className="p-4 w-52 border-b-2" value="bmw">
              BMW 320 ModernLine
            </TabsTrigger>
            <TabsTrigger className="p-4 w-52 border-b-2" value="mercedes">
              Mercedes-Benz GLK
            </TabsTrigger>
            <TabsTrigger className="p-4 w-52" value="passat">
              VW Passat CC
            </TabsTrigger>
          </TabsList>
          {carModals.map((car) => (
            <TabsContent
              key={car.value}
              className="data-[state=active]:flex xl:flex-row xl:w-full justify-between flex-col gap-12"
              value={car.value}
            >
              <img
                src={car.image}
                className="object-contain w-full"
                alt={`${car.mark} ${car.model} image`}
              />

              <div className="flex flex-col w-full items-center justify-center">
                <div className="min-w-[20rem] border-2 border-zinc-700">
                  <div className="bg-primary border-3 flex justify-center text-3xl p-4 font-bold border-primary text-stone-50">
                    {car.price} / per day
                  </div>
                  <div className="flex gap-4 items-center w-full relative px-6 py-3 border-b-2 justify-between border-zinc-700">
                    Model
                    <Separator className="w-[2px] h-6 bg-zinc-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    {car.model}
                  </div>
                  <div className="flex gap-4 items-center w-full relative px-6 py-3 border-b-2 justify-between border-zinc-700">
                    Mark
                    <Separator className="w-[2px] h-6 bg-zinc-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    {car.mark}
                  </div>
                  <div className="flex gap-4 items-center w-full relative px-6 py-3 border-b-2 justify-between border-zinc-700">
                    Year
                    <Separator className="w-[2px] h-6 bg-zinc-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    {car.year}
                  </div>
                  <div className="flex gap-4 items-center w-full relative px-6 py-3 border-b-2 justify-between border-zinc-700">
                    Doors
                    <Separator className="w-[2px] h-6 bg-zinc-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    {car.doors}
                  </div>
                  <div className="flex gap-4 items-center w-full relative px-6 py-3 border-b-2 justify-between border-zinc-700">
                    AC
                    <Separator className="w-[2px] h-6 bg-zinc-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    {car.ac}
                  </div>
                  <div className="flex gap-4 items-center w-full relative px-6 py-3 border-b-2 justify-between border-zinc-700">
                    Transmission
                    <Separator className="w-[2px] h-6 bg-zinc-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    {car.transmission}
                  </div>
                  <div className="flex gap-4 items-center w-full relative px-6 py-3 justify-between">
                    Fuel
                    <Separator className="w-[2px] h-6 bg-zinc-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    {car.fuel}
                  </div>
                </div>

                <Button className="w-[20rem] hover:border hover:text-primary hover:border-primary mt-4 font-bold text-xl h-12">
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
