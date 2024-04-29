
import FromOurBlog from "../components/FromOurBlog";
import HomeHeader from "../components/HomeHeader";
import ImageCarousel from "../components/ImageCarousel";
import OurSpecialization from "../components/OurSpecialization";
import Stats from "../components/Stats";
import TeamMembers from "../components/TeamMembers";
import Testimonials from "../components/Testimonials";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <>
      
        <HomeHeader />
        <WhoWeAre/>
        <ImageCarousel/>
        <OurSpecialization/>
        <Stats/>
        <Testimonials/>
        <TeamMembers/>
        <WhyChooseUs/>
        <FromOurBlog/>
        
    </>
  );
};

export default Home;
