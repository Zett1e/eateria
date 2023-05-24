import BookATable from "@/components/BookATable";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="relative">
      <Navbar/>
      <Hero/>
      <Menu/>
      <Testimonial/>
      <BookATable/>
      <Footer/>
    </main>
  )
}
