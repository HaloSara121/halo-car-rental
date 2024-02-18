import { CheckCircle2, ChevronDown, ChevronRight } from 'lucide-react'

import heroCar from '@/assets/hero-car.png'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="min-h-screen container justify-center flex items-center relative">
      <a
        href="#rent-car-form"
        className="absolute bottom-12 left-1/2 -translate-x-1/2golf
        golf"
      >
        <ChevronDown className="cursor-pointer z-20 h-12 w-12 animate-bounce" />
      </a>

      <div className="xl:container flex items-center gap-16">
        <div className="font-[Poppins] flex flex-col items-center xl:items-start xl:text-left font-bold space-y-6">
          <strong className="text-xl">Plan your trip now</strong>

          <h1 className="text-6xl text-center xl:text-left xl:max-w-[34rem] leading-tigher">
            Save <span className="text-primary">big</span> with our car rental
          </h1>

          <p className="font-normal text-center xl:text-left font-[Rubik] text-zinc-500 max-w-[27.5rem]">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>

          <div className="flex flex-col w-full gap-4 items-center xl:items-start xl:flex-row">
            <Button className="w-full xl:w-56 h-16 text-xl flex gap-4">
              Book Ride <CheckCircle2 />
            </Button>

            <Button
              variant="secondary"
              className=" w-full xl:w-56 h-16 text-xl flex gap-4"
            >
              Learn More <ChevronRight />
            </Button>
          </div>
        </div>

        <img
          src={heroCar}
          className="pointer-events-none z-10 w-[50rem] xl:flex hidden"
          alt="hero background image"
        />
      </div>
    </section>
  )
}
