import heroBackground from '@/assets/hero-bg.png'

import { Advanteges } from './adventages'
import { FAQ } from './faq'
import { Hero } from './hero'
import { RentCarForm } from './rent-car-form'
import { Ruler } from './ruler'
import { Testimonials } from './testimonials'
import { VehiclosModels } from './vehicles-models'
import { WhyUs } from './why-us'

export const Home = () => {
  return (
    <>
      <img
        src={heroBackground}
        className="pointer-events-none absolute right-0 top-0 hidden xl:flex"
        alt="hero background image"
      />

      <main className="relative flex w-full flex-col justify-center bg-stone-100 font-[Rubik]">
        <div className="bg-gradient-to-b  from-stone-100 to-white">
          <Hero />
          <section id="rent-car-form" className="container">
            <RentCarForm />
          </section>
          <Advanteges />
          <VehiclosModels />
        </div>
        <Ruler />
        <WhyUs />
        <Testimonials />
        <FAQ />
      </main>
    </>
  )
}
