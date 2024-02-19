import atendent from '@/assets/atendent.png'
import fastCar from '@/assets/fast-car.png'
import secureCar from '@/assets/secure-car.png'

export const Advanteges = () => {
  return (
    <section className="relative flex items-center justify-center py-24">
      <div className="flex flex-col items-center gap-4 px-3 xl:container">
        <h3 className="text-center text-xl ">Plan your trip now</h3>

        <strong className="text-center font-[Poppins] text-5xl">
          Quick & easy car rental
        </strong>

        <div className="mt-12 flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className=" flex flex-col items-center">
            <img className="w-56" src={secureCar} alt="securecar icon" />

            <div className="space-y-4 text-center">
              <strong className="font-[Poppins] text-2xl">Select Car</strong>
              <p className="text-zinc-600">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center">
            <img className="w-56" src={atendent} alt="atendent icon" />

            <div className="space-y-4 text-center">
              <strong className="font-[Poppins] text-2xl">
                Contact Operator
              </strong>
              <p className="text-zinc-600">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center">
            <img className="w-56" src={fastCar} alt="fast car icon" />

            <div className="space-y-4 text-center">
              <strong className="font-[Poppins] text-2xl">
                Let&apos;s Drive
              </strong>
              <p className="text-zinc-600">
                Whether you&apos;re hitting the open road, we&apos;ve got you
                covered with our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
