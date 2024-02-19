import faqCarBr from '@/assets/faq-car-bg.png'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const FAQ = () => {
  return (
    <section className="relative bg-white py-24">
      <img
        className="absolute left-0"
        src={faqCarBr}
        alt="faq car background"
      />

      <div className="container relative z-10  flex flex-col items-center gap-4 bg-white xl:bg-transparent ">
        <h3 className="text-center text-xl">FAQ</h3>

        <strong className="text-center font-[Poppins] text-5xl">
          Frequently Asked Questions
        </strong>

        <p className="max-w-3xl text-center text-zinc-600">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>

        <Accordion
          className="mt-8 w-full max-w-4xl rounded-lg bg-white"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="px-4 data-[state=open]:bg-primary data-[state=open]:text-stone-50">
              1. What is special about comparing rental car deals?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-lg">
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="px-4 data-[state=open]:bg-primary data-[state=open]:text-stone-50">
              2. How do I find the car rental deals?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-lg">
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="px-4 data-[state=open]:bg-primary data-[state=open]:text-stone-50">
              3. How do I find such low rental car prices?
            </AccordionTrigger>
            <AccordionContent className="p-4 text-lg">
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
