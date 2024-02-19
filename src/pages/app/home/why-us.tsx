import { ChevronRight } from 'lucide-react'

import coin from '@/assets/coin.png'
import copCar from '@/assets/cop-car.png'
import holdingCoin from '@/assets/holding-coin.png'
import whyUsBg from '@/assets/why-us-bg-fading.png'
import whyUsCars from '@/assets/why-us-cars.png'
import { Button } from '@/components/ui/button'

export const WhyUs = () => {
  return (
    <section className="relative flex items-center justify-center py-24">
      <img
        className="absolute bottom-0 left-0"
        src={whyUsBg}
        alt="why us background"
      />

      <div className="container flex flex-col items-center gap-6">
        <img className="" src={whyUsCars} alt="why us hero image" />

        <div className="flex w-full flex-col items-center justify-center gap-20 xl:flex-row xl:justify-between">
          <div className=" flex max-w-2xl flex-col items-center gap-6 xl:items-start">
            <h3 className="text-center text-xl xl:text-left">Why choose us</h3>

            <strong className="text-center font-[Poppins] text-5xl xl:text-left">
              Best valued deals you will ever find
            </strong>

            <p className="text-center text-zinc-600 xl:text-left">
              Discover the best deals you&apos;ll ever find with our unbeatable
              offers. We&apos;re dedicated to providing you with the best value
              for your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don&apos;t miss out on your chance
              to save big.
            </p>

            <Button className="mt-4 h-16 w-[20rem] text-xl font-bold hover:border hover:border-primary hover:text-primary">
              Find Details <ChevronRight />
            </Button>
          </div>

          <div className="gap flex flex-col items-center gap-8">
            <div className=" flex flex-col items-center gap-6 lg:flex-row">
              <img className="w-32" src={copCar} alt="securecar icon" />

              <div className="lg: max-w-md space-y-4 text-center lg:text-start">
                <strong className="font-[Poppins] text-2xl">
                  Cross Country Drive
                </strong>
                <p className="text-zinc-600">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>

            <div className=" flex flex-col items-center gap-6 lg:flex-row">
              <img className="w-32" src={coin} alt="atendent icon" />

              <div className="lg: max-w-md space-y-4 text-center lg:text-start">
                <strong className="font-[Poppins] text-2xl">
                  All Inclusive Pricing
                </strong>
                <p className="text-zinc-600">
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>

            <div className=" flex flex-col items-center gap-6 lg:flex-row">
              <img className="w-32" src={holdingCoin} alt="fast car icon" />

              <div className="lg: max-w-md space-y-4 text-center lg:text-start">
                <strong className="font-[Poppins] text-2xl">
                  No Hidden Charges
                </strong>
                <p className="text-zinc-600">
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
