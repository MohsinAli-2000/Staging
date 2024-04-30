import Header from "../components/Header";
import WhyChooseUs from "../components/WhyChooseUs";
import TeamMembers from "../components/TeamMembers";
const About = () => {
  return (
    <>
      <Header page="About US" />

      <div className="px-2 md:px-32 my-12 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3">
          <span className="text-custom-orange font-bold">WHO ARE WE</span>
          <h1 className="text-4xl font-aldrich my-4">ABOUT US</h1>
          <p className="text-custom-gray my-12">
            As you might expect of a company that began as a high-end interiors
            contractor.
          </p>
        </div>

        <div className="w-full md:w-2/3 ml-0 md:ml-6">
          <p className="text-custom-gray">
            Metasurfaces are generally designed by placing scatterers in
            periodic or pseudo-periodic grids. We propose and discuss design
            rules for functional metasurfaces with randomly placed. Anisotropic
            elements that randomly sample. Quisque sit amet nisl ante.
          </p>
          <div className="my-4 flex flex-col md:flex-row">
            <div className="mt-12 md:mt-0">
              <img src="/our-mission.webp" alt="image" />
              <h3 className="font-aldrich text-2xl my-4">OUR MISSION</h3>
              <p className="text-custom-gray">
                As you might expect of a company that began as a high-end
                interiors contractor, we pay strict attention. Anisotropic
                elements that randomly sample.
              </p>
            </div>

            <div className="mt-12 md:mt-0">
              <img src="/our-vision.webp" alt="image" />
              <h3 className="font-aldrich text-2xl my-4">OUR VISION</h3>
              <p className="text-custom-gray">
                Our commitment to exceptional quality has never wavered. To day
                ranks as one of the most highly-regarded construction.
                Anisotropic elements that randomly sample.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <TeamMembers />
    </>
  );
};

export default About;
