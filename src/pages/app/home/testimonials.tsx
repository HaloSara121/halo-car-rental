import { Quote } from 'lucide-react'

import harry from '@/assets/harry.jpg'
import ron from '@/assets/ron.jpg'

const testimonials = [
  {
    message:
      '"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."',
    author: {
      name: 'Parry Hotter',
      city: 'Belgrade',
      image: harry,
    },
  },
  {
    message:
      '"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"',
    author: {
      name: 'Ron Rizzly',
      city: 'Novi Sad',
      image: ron,
    },
  },
]

export const Testimonials = () => {
  return (
    <section className="items-cente relative flex w-full justify-center bg-stone-200 py-24">
      <div className="container flex flex-col items-center gap-6 self-center">
        <h3 className="text-center text-xl">Reviewed by People</h3>

        <strong className="text-center font-[Poppins] text-5xl">
          Client&apos;s Testimonials
        </strong>

        <p className="max-w-3xl text-center text-zinc-600">
          Discover the positive impact we&apos;ve made on the our clients by
          reading through their testimonials. Our clients have experienced our
          service and results, and they&apos;re eager to share their positive
          experiences with you.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author.name}
              className="flex max-w-lg flex-col justify-between gap-4 rounded-lg bg-white p-6 shadow-xl"
            >
              <p className="text-2xl">{testimonial.message}</p>

              <div className="flex ">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      className="h-20 w-20 rounded-full"
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                    />

                    <div className="flex flex-col">
                      <strong>{testimonial.author.name}</strong>
                      <span className="text-zinc-600">
                        {testimonial.author.city}
                      </span>
                    </div>
                  </div>

                  <Quote className="hidden h-12 w-12 text-primary lg:flex" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
