import { Mail, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-24">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <strong className="text-2xl">Car Rental</strong>

          <p className="text-zinc-700">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>

          <div className="flex flex-col justify-center gap-2">
            <strong className="flex items-center gap-2 font-bold">
              <Phone />
              (123)-456-789
            </strong>

            <strong className="flex items-center gap-2 font-bold">
              <Mail />
              carrental@gmail.com
            </strong>
          </div>

          <small>Desing by XpeedStudio</small>
        </div>

        <div className="flex flex-col gap-3 ">
          <strong className="text-2xl">Company</strong>

          <a className="transition-colors hover:text-primary" href="#">
            New York
          </a>
          <a className="transition-colors hover:text-primary" href="#">
            Carrers
          </a>
          <a className="transition-colors hover:text-primary" href="#">
            Mobile
          </a>
          <a className="transition-colors hover:text-primary" href="#">
            Blog
          </a>
          <a className="transition-colors hover:text-primary" href="#">
            How we work
          </a>
        </div>

        <div className="flex flex-col gap-3 ">
          <strong className="text-2xl">Working Hours</strong>

          <p>Mon - Fri: 9:00AM - 9:00PM </p>
          <p>Sat: 9:00AM - 19:00PM </p>
          <p>Sun: Closed </p>
        </div>

        <div className="space-y-3">
          <strong className="text-2xl">Subscription</strong>

          <p className="text-zinc-700">
            Subscribe your Email address for latest news & updates.
          </p>

          <div>
            <Input name="email" placeholder="Enter e-mail address" />

            <Button className="mt-4 w-full text-lg font-bold hover:border hover:border-primary hover:text-primary">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
