

const OurSpecialization = () => {
  return (
    <div className="my-16 px-2 md:px-32">
      <span className="text-custom-orange text-lg font-bold">OUR SPECIALIZATION</span>
      <h2 className="font-aldrich text-custom-black text-4xl my-4">WHAT WE DO</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-8">
            <div className="flex flex-col">
                    <img src="/interior-design.webp" width={70} alt="image" />
                    <h3 className="font-aldrich text-custom-black text-2xl my-4">INTERIOR DESIGN</h3>
                    <p className="text-custom-gray">As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
            </div>
            <div className="flex flex-col">
                    <img src="/office-design.webp" width={70} alt="image" />
                    <h3 className="font-aldrich text-custom-black text-2xl my-4">OFFICE DESIGN</h3>
                    <p className="text-custom-gray">Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction.</p>
            </div>
            <div className="flex flex-col">
                    <img src="/home-design.webp" width={70} alt="image" />
                    <h3 className="font-aldrich text-custom-black text-2xl my-4">HOME DESIGN</h3>
                    <p className="text-custom-gray">Interdisciplinary architectural studio with cultural, residential and commercial projects built worldwide.</p>
            </div>
            <div className="flex flex-col">
                    <img src="/design-drawing.webp" width={70} alt="image" />
                    <h3 className="font-aldrich text-custom-black text-2xl my-4">DESIGN DRAWING</h3>
                    <p className="text-custom-gray">Creating architectural and creative solutions to help people realize their vision and make them a reality.</p>
            </div>
      </div>
            <hr  className="my-12 text-custom-gray"/>
    </div>
  )
}

export default OurSpecialization
