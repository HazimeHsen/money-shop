import { Footer, Header, Hero, Products } from "@/components";
import ContactUs from "@/components/ContactUs";
import { HeroScrollPreview } from "@/components/HotProducts";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="">
        <Hero />
        {/* <HeroScrollPreview /> */}
        <Products />
        <div className="mx-5">
          <hr />
        </div>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
