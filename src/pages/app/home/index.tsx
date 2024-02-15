import { Hero } from './hero'
import { RentCarForm } from './rent-car-form'

export const Home = () => {
  return (
    <main className="container">
      <Hero />
      <RentCarForm />
    </main>
  )
}
