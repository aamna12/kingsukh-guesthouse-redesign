import React,{useState} from "react";
import toast from "react-hot-toast";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [msg, setMsg] = useState("");

  const handleWhatsappMsg = (e) =>{
    e.preventDefault();
      if (!name || !email || !num || !msg) {
      toast.error("Please fill out all fields.");
      return}
    const text=`Hi, ${msg}.
    Name: ${name}, 
    Email: ${email},
    Contact Number: ${num}`;
    const whatsappLink = `https://wa.me/919007062180?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, "_blank"); 
    toast.success("Message sent via WhatsApp!");
    setName("");
    setEmail("");
    setNum("");
    setMsg("");
    
  };
  
  return (
    <>
    <section className="bg-gray-100 py-10">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h3 className="text-5xl font-bold text-gray-800 mb-3 ">Get in Touch</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or want to make a booking or write a review?
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto">
        Fill out the form below and we'll get back to you shortly!
        </p>
      </div>

      <form onSubmit= {handleWhatsappMsg} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"/>
          <input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"/>
          <input type="text" placeholder="Phone Number" value={num} onChange={(e)=>setNum(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"/>
        </div>
        <div className="flex flex-col gap-4">
          <textarea placeholder="Your Message" value={msg} onChange={(e)=>setMsg(e.target.value)}
            className="p-3 border border-gray-300 rounded h-full min-h-[180px] focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          <button type="submit" className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition-colors w-full">
            Send Message </button>
        </div>
      </form>
    </div>
  </section>
    </>
  )
}

export default Contact;
