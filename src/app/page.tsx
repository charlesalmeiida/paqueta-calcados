import { NumberShoes } from "@/components/homepage/number-shoes/number-shoes"
import { Products } from "@/components/homepage/products/products"
import { Footer } from "@/components/layout/footer/footer"
import { Header } from "@/components/layout/header/header"
import { Hero } from "@/components/homepage/hero/hero"
import { SectionBanners } from "@/components/homepage/section-banners/section-banners"
import { LogoBrands } from "@/components/homepage/brands/logo-brands"
import { Newsletter } from "@/components/homepage/newsletter/newsletter"

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <SectionBanners />

      <NumberShoes />

      <Products />

      <LogoBrands />

      <Newsletter />

      <Footer />
    </>
  )
}
