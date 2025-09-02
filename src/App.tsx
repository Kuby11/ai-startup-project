import Companies from "./sections/companies/companies"
import Nav from "./components/nav"
import Hero from "./sections/hero/hero"
import Footer from "./sections/footer/footer"
import Bento from "./sections/bento/bento"
import Features from "./sections/features/features"
import Clients from "./sections/clients/clients"
import Pricing from "./sections/pricing/pricing"
import Cta from "./sections/cta/cta"

function App() {
  return (
    <main className="overflow-x-hidden max-w-7xl mx-auto px-4 h-full flex flex-col gap-20 items-center ">
      <Nav />
      <Hero />
      <Companies />
      <Bento />
      <Features />
      <Clients />
      <Pricing />
      <Cta />
      <Footer />
    </main>
  )
}

export default App
