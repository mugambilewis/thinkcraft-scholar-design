import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesTabs from "@/components/ServicesTabs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ReadyToBegin from "@/components/ReadyToBegin";
import Integrations from "@/components/Integrations";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div id="home" className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      {/* <Integrations /> */}
      <ServicesTabs />
      
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <Testimonials />
      <FAQSection />
      <ReadyToBegin />
      <ChatWidget />
     
    </div>
  );
};

export default Index;
