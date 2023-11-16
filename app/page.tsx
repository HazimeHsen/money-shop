import { Header, Hero, Products } from "@/components";
import ContactUs from "@/components/ContactUs";
import { HeroScrollPreview } from "@/components/HotProducts";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="">
        <Hero />
        <HeroScrollPreview />
        <Products />
        {/* <ContactUs /> */}
      </div>
    </div>
  );
}
