import BrandHeader from "../../components/brand-header";
import { Features } from "../../components/features";
import { Footer } from "../../components/footer";
import { HeroBanner } from "../../components/hero";

export const Home = () => {
return (
<>
  <div className="bg-[#0F172A]">
    <BrandHeader />
    <HeroBanner />
    <Features />
    <Footer />
  </div>
</>
);
};