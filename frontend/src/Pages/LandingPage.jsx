import Header from '../components/Header';
import HeroSection from '../components/Hero_Img_Class';
import ProcessFlow from '../components/ProcessFlow';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <Header />
      <HeroSection />
      <FAQ />
      <ProcessFlow />
      <Footer />
    </div>
  );
};


export default LandingPage;