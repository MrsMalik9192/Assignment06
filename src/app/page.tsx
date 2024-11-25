import Achivements from "@/components/Achivements";
import Courses from "@/components/Courses";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Trusted from "@/components/Trusted";








function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Trusted />
      <Explore />
      <Achivements />
      <Courses />
      <Team />
<Testimonials />
<Footer />

      
    </div>
  );
}

export default Homepage;



