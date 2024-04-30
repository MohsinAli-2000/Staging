import Header from "../components/Header"


const Contact = () => {
  return (
    <div>
      <Header page="Contact US" />
      <div className="px-2 md:px-32 my-12">
        <div className="w-1/2">

<span className="text-custom-orange font-bold">INFORMATION</span>
<h3 className="text-custom-black text-4xl font-aldrich my-4">CONTACT DETAILS</h3>
<p className="text-custom-gray">As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
        </div>

        <div className="my-6 flex flex-col md:flex-row justify-between">
<div className="flex md:justify-between items-center">
  <img src="/phone.webp" alt="image" />
  <div className="ml-4">
    <h5 className="font-aldrich text-custom-orange text-2xl">PHONE NUMBER</h5>
    <p className="text-lg">+01 123 456 789</p>
  </div>
</div>


<div className="flex md:justify-between items-center">
  <img src="/email.webp" alt="image" />
  <div className="ml-4">
    <h5 className="font-aldrich text-custom-orange text-2xl">EMAIL ADDRESS</h5>
    <p className="text-lg">info.@gmail.com</p>
  </div>
</div>

<div className="flex md:justify-between  items-center">
  <img src="/location.webp" alt="image" />
  <div className="ml-4">
    <h5 className="font-aldrich text-custom-orange text-2xl">OFFICE LOCATION</h5>
    <p className="text-lg">7176 Blue Spring Lane, NY, US</p>
  </div>
</div>
        </div>

{/* Map location */}

<div className="my-12">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.67070025064!2d-74.25536888712344!3d40.76660112426298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2s!4v1714445458646!5m2!1sen!2s" className="w-full h-96"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>

<div className="my-12">
<div className="w-full md:w-1/2">
<span className="text-custom-orange font-bold">FORM</span>
<h3 className="text-4xl font-aldrich text-custom-black my-4">GET IN TOUCH</h3>
<p className="text-custom-gray">As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
</div>
<div className="w-full">

<form action="submit" className="w-full">
  <div className="flex flex-col md:flex-row w-full  md:w-3/4">
  <input type="text" className="border-custom-gray my-4 p-4 w-full  border outline-none" placeholder="Name" />
  <input type="text" className="border-custom-gray my-4 p-4 w-full mx-0 md:mx-4 border outline-none" placeholder="Email" />
  </div>
  <div className="my-4">

  <textarea type=""   rows={6} className="border-custom-gray p-4 w-full md:w-3/4 border outline-none" placeholder="Message" />
  </div>

  <button className="text-white bg-custom-orange px-6 py-3 font-bold">Send Message</button>
</form>
</div>

</div>
      </div>
    </div>
  )
}

export default Contact

