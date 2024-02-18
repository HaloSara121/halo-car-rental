import heroBackground from '@/assets/hero-bg.png'

import { Advanteges } from './adventages'
import { Hero } from './hero'
import { RentCarForm } from './rent-car-form'
import { VehiclosModels } from './vehicles-models'

export const Home = () => {
  return (
    <>
      <img
        src={heroBackground}
        className="absolute top-0 right-0 pointer-events-none xl:flex hidden"
        alt="hero background image"
      />

      <main className="flex flex-col justify-center w-full relative">
        <div className="bg-gradient-to-b from-stone-100 to-white">
          <Hero />
          <section id="rent-car-form" className="container">
            <RentCarForm />
          </section>
          <Advanteges />
          <VehiclosModels />
        </div>
      </main>
    </>
  )
}
