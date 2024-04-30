import Header from "../components/Header";

const Services = () => {
  return (
    <div>
      <Header page="Services" />
      <div className="px-2 md:px-32 my-6">
        <span className="text-custom-orange font-bold">OUR SPECIALIZATION</span>
        <h1 className="font-aldrich text-4xl my-2">WHAT WE DO</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 my-12">
          <div>
            <img src="/services-interior.webp" alt="image" />
            <h4 className="font-aldrich text-2xl my-4">INTERIOR DESIGN</h4>
            <p className="text-custom-gray my-4">
              As you might expect of a company that began as a high-end
              interiors contractor, we pay strict attention.
            </p>
            <p className="my-2">- Energy allocation.</p>
            <p className="my-2">- Fire protection, safety</p>
            <p className="my-2">- Lifts and escalators.</p>
            <p className="my-2">- Facade engineering.</p>
          </div>

          <div>
            <img src="/office-interior.webp" alt="image" />
            <h4 className="font-aldrich text-2xl my-4">OFFICE DESIGN</h4>
            <p className="text-custom-gray my-4">
              Our commitment to exceptional quality has never wavered. To day
              ranks as one of the most highly-regarded construction.
            </p>
            <p className="my-2">- Active system.</p>
            <p className="my-2">- Air conditioning.</p>
            <p className="my-2">- BSRIA blue book.</p>
            <p className="my-2">- Building services engineer.</p>
          </div>

          <div>
            <img src="/home-interior.webp" alt="image" />
            <h4 className="font-aldrich text-2xl my-4">HOME DESIGN</h4>
            <p className="text-custom-gray my-4">
              Interdisciplinary architectural studio with cultural, residential
              and commercial projects built worldwide.
            </p>
            <p className="my-2">- Pipework.</p>
            <p className="my-2">- Plant room.</p>
            <p className="my-2">- Plumbing.</p>
            <p className="my-2">- Rules of Thumb</p>
          </div>

          <div>
            <img src="/design-interior.webp" alt="image" />
            <h4 className="font-aldrich text-2xl my-4">DESIGN DRAWING</h4>
            <p className="text-custom-gray my-4">
              Creating architectural and creative solutions to help people
              realize their vision and make them a reality.
            </p>
            <p className="my-2">- Guidelines for building.</p>
            <p className="my-2">- Thermal comfort.</p>
            <p className="my-2">- Types of building services.</p>
            <p className="my-2">- Types of heating system.</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col md:flex-row w-full justify-start -ml-16 md:-ml-0 md:justify-between items-center px-2 md:px-32 bg-custom-black my-12">
        <div className="gap-5 flex justify-between items-center my-4">
          <span className="font-aldrich text-custom-orange text-6xl">85</span>
          <span className="font-aldrich text-custom-white text-xl">
            PROJECTS <br /> COMPLETED
          </span>
        </div>
        <div className="gap-5 flex justify-between items-center my-4">
          <span className="font-aldrich text-custom-orange text-6xl">127</span>
          <span className="font-aldrich text-custom-white text-xl">
            HAPPY <br />
            CLIENTS
          </span>
        </div>
        <div className="gap-5 flex justify-between items-center my-4">
          <span className="font-aldrich text-custom-orange text-6xl">36</span>
          <span className="font-aldrich text-custom-white text-xl">
            AWARDS <br />
            RECEIVED
          </span>
        </div>
        <div className="gap-5 flex justify-between items-center my-4">
          <span className="font-aldrich text-custom-orange text-6xl">74</span>
          <span className="font-aldrich text-custom-white text-xl">
            CUPS OF <br />
            COFFEE
          </span>
        </div>

        {/* Our Clients */}
      </div>
      <div className="flex flex-col md:flex-row justify-between px-2 md:px-32 my-12">
        <div className="my-0 md:my-6">
          <span className="text-custom-orange font-bold">BRANDING</span>
          <h4 className="font-aldrich text-custom-black text-4xl">
            OUR CLIENTS
          </h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 my-0 md:my-6">
          <img src="/company-01.webp" alt="image" />
          <img src="/company-02.webp" alt="image" />
          <img src="/company-03.webp" alt="image" />
          <img src="/company-04.webp" alt="image" />
          <img src="/company-02.webp" alt="image" />
          <img src="/company-03.webp" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Services;
