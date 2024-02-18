import atendent from '@/assets/atendent.png'
import fastCar from '@/assets/fast-car.png'
import secureCar from '@/assets/secure-car.png'

export const Advanteges = () => {
  return (
    <section className="py-24 justify-center flex items-center relative">
      <div className="xl:container flex flex-col items-center gap-4">
        <h3 className="text-center text-xl">Plan your trip now</h3>

        <strong className="text-5xl text-center">
          Quick & easy car rental
        </strong>

        <div className="flex justify-between items-center mt-12 flex-col lg:flex-row gap-12">
          <div className=" flex items-center flex-col">
            <img className="w-56" src={secureCar} alt="securecar icon" />

            <div className="text-center space-y-4">
              <strong className="text-2xl">Select Car</strong>
              <p className="text-zinc-600">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
          </div>

          <div className=" flex items-center flex-col">
            <img className="w-56" src={atendent} alt="atendent icon" />

            <div className="text-center space-y-4">
              <strong className="text-2xl">Contact Operator</strong>
              <p className="text-zinc-600">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
          </div>

          <div className=" flex items-center flex-col">
            <img className="w-56" src={fastCar} alt="fast car icon" />

            <div className="text-center space-y-4">
              <strong className="text-2xl">Let&apos;s Drive</strong>
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
