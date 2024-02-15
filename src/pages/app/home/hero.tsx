import { CheckCircle2, ChevronRight } from 'lucide-react'

import heroBackground from '@/assets/hero-bg.png'
import heroCar from '@/assets/hero-car.png'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center">
      <img
        src={heroBackground}
        className="absolute top-0 right-0 -z-0 pointer-events-none lg:flex hidden"
        alt="hero background image"
      />

      <div className="lg:container flex items-center gap-16">
        <div className="font-[Poppins] text-center lg:text-left font-bold space-y-6">
          <strong className="text-xl">Plan your trip now</strong>

          <h1 className="text-6xl lg:max-w-[34rem] leading-tigher">
            Save <span className="text-primary">big</span> with our car rental
          </h1>

          <p className="font-normal font-[Rubik] text-zinc-500 max-w-[27.5rem]">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>

          <div className="flex flex-col gap-4 items-center lg:items-start lg:flex-row">
            <Button className="w-full lg:w-56 h-16 text-lg flex gap-4">
              Book Ride <CheckCircle2 />
            </Button>

            <Button
              variant="secondary"
              className=" w-full lg:w-56 h-16 text-lg flex gap-4"
            >
              Learn More <ChevronRight />
            </Button>
          </div>
        </div>

        <img
          src={heroCar}
          className="pointer-events-none z-10 lg:flex hidden"
          alt="hero background image"
        />
      </div>
    </div>
  )
}
