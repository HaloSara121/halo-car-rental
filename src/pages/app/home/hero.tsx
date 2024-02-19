import { CheckCircle2, ChevronDown, ChevronRight } from 'lucide-react'

import heroCar from '@/assets/hero-car.png'
import { Button } from '@/components/ui/button'

export const Hero = () => {
  return (
    <section className="container relative flex min-h-screen items-center justify-center">
      <a
        href="#rent-car-form"
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="z-20 h-12 w-12 animate-bounce cursor-pointer" />
      </a>

      <div className="flex items-center gap-16 xl:container">
        <div className="flex flex-col items-center space-y-6 font-[Poppins] font-bold xl:items-start xl:text-left">
          <strong className="text-xl">Plan your trip now</strong>

          <h1 className="leading-tigher text-center text-6xl xl:max-w-[34rem] xl:text-left">
            Save <span className="text-primary">big</span> with our car rental
          </h1>

          <p className="max-w-[27.5rem] text-center font-[Rubik] font-normal text-zinc-500 xl:text-left">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>

          <div className="flex w-full flex-col items-center gap-4 xl:flex-row xl:items-start">
            <Button className="flex h-16 w-full gap-4 text-xl hover:border hover:border-primary hover:text-primary xl:w-56">
              Book Ride <CheckCircle2 />
            </Button>

            <Button
              variant="secondary"
              className=" flex h-16 w-full gap-4 text-xl xl:w-56 "
            >
              Learn More <ChevronRight />
            </Button>
          </div>
        </div>

        <img
          src={heroCar}
          className="pointer-events-none z-10 hidden w-[50rem] xl:flex"
          alt="hero background image"
        />
      </div>
    </section>
  )
}
