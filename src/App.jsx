import Hero from './sections/Hero'
import Services from './sections/Services'
import Footer from './sections/Footer'
import CustomerReviews from './sections/CustomerReviews'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Suscribe from './sections/Suscribe'
import SpecialOffer from './sections/SpecialOffer'
import Nav from './sections/Nav'


export default function App() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section> <section className="padding-x py-10">
        <Services/>
      </section> <section className="padding">
        <SpecialOffer/>
      </section> <section className="padding bg-pale-blue">
        <CustomerReviews/>
      </section> <section className="padding-x sm:py-32 py-16 w-full">
        <Suscribe/>
      </section> <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}