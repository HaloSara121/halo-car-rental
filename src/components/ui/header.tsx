import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Button } from './button'

export const Header = () => {
  return (
    <header className="bg-transparent top-0 left-1/2 -translate-x-1/2 ta container px-4 pr-5 py-6 absolute">
      <div className="hidden lg:flex justify-between items-center w-full text-zinc-900">
        <img className="h-12 lg:h-12" src={logo} alt="Car rental logo" />

        <nav className="flex gap-8 font-[Rubik] font-medium">
          <Link className="hover:text-primary" to="/">
            Home
          </Link>

          <Link className="hover:text-primary" to="/about">
            About
          </Link>

          <Link className="hover:text-primary" to="/models">
            Models
          </Link>

          <Link className="hover:text-primary" to="/testimonials">
            Testimonials
          </Link>

          <Link className="hover:text-primary" to="/team">
            Our Team
          </Link>

          <Link className="hover:text-primary" to="/contact">
            Contact
          </Link>
        </nav>

        <div className="flex gap-4">
          <Button className="bg-transparent text-lg hover:ring-1 ring-zinc-900 text-zinc-900 transition-all">
            Sign In
          </Button>
          <Button className="w-40 hover:text-primary text-lg hover:ring-1 ring-primary">
            Register
          </Button>
        </div>
      </div>

      <div className="flex lg:hidden justify-between items-center">
        <img className="h-12 lg:h-12 " src={logo} alt="Car rental logo" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 font-[Poppins]" align="end">
            <DropdownMenuLabel className="font-bold text-lg">
              Pages
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="font-medium">
              <Link to="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium">
              <Link to="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium">
              <Link to="/models">Models</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium">
              <Link to="/testimonials">Testimonials</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium">
              <Link to="/team">Our Team</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="font-medium">
              <Link to="/contact">Contact</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Button className="w-full bg-transparent ring-1 ring-zinc-900 text-zinc-900 transition-all">
                Sign In
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button className="w-full hover:text-primary hover:ring-1 ring-primary">
                Register
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
