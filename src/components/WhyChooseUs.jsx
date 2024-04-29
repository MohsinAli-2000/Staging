

const WhyChooseUs = () => {
    const bgimage = {
        
            backgroundImage: 'url("/whyChooseUs-bg.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
         
    }
  return (
    <div className="w-full text-custom-white flex flex-col justify-center items-center my-12 py-6" style={bgimage}>
        
      <span className="text-custom-orange text-lg font-bold">WHY CHOOSE US?</span>
      <h3 className="font-aldrich text-center w-2/3 text-2xl md:text-4xl my-10">OUR ABILITY TO DELIVER OUTSTANDING RESULTS FOR OUR CLIENTS STARTS WITH OUR TEAM OF SMART.</h3>
      <button className="bg-custom-orange py-2 px-4 font-bold text-xl rounded">Contact Us</button>
    </div>
  )
}

export default WhyChooseUs
