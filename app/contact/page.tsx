"use client";
import { useState, useEffect } from "react";
import SocialWidget from "@/components/SocialWidget";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { log } from "console";



export default function ContactPage() {

  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package") || "";
  const selectedLocation = searchParams.get("location") || "";
  
  const router = useRouter();
  
  // Form state

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobile: "",
    age: "",
    gender: "",
    goal: "",
    customGoal:"",
    specific: "",
    package: "",   // prefill here
    mode: "", // if location exists, assume in_person
    date: "",
    time: "",
    location: "", // prefill here
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const selectedPackage = searchParams.get("package") || "";
  const selectedLocation = searchParams.get("location") || "";
   console.log(selectedLocation);
  setFormData(prev => ({
    ...prev,
    package: selectedPackage,
    location: selectedLocation,
    mode: selectedLocation ? "in_person" : prev.mode
  }));
}, [searchParams]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Thank you! Your request for reservation has been sent. We will contact you soon');
      
      // Reset form data
      setFormData({
        email: "", name: "", mobile: "", age: "", gender: "",
        goal: "", customGoal:"", specific: "", package: "", mode: "", date: "", time: "", location:""
      });

      // ✅ Clear query params from URL
      router.replace(window.location.pathname, { scroll: false });
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('Error sending form. Try again later.');
  } finally {
    setLoading(false);
  }
};

  
// Inside your ContactPage component, before the return:
const mapUrls: Record<string, string> = {
  Chennai: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.973133308843!2d80.26086888417115!3d12.972710882235559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6671526a45%3A0xf084610af834037a!2sAtra%20-%20Sports%20Science%20Centre!5e0!3m2!1sen!2sus!4v1756109821424!5m2!1sen!2sus",
  
  Bangalore: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.447153537802!2d77.63392929419744!3d12.95754055509782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1543a9805545%3A0xfab1b49b6e8ba081!2sAtra%20-%20Sports%20Science%20Centre!5e0!3m2!1sen!2sin!4v1758726612200!5m2!1sen!2sin",
  
  Coimbatore: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5351142786626!2d76.98610197570504!3d10.998419855058398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859873d5eb14f%3A0x508768e05b21051!2sAtra%20-%20Sports%20Science%20Centre!5e0!3m2!1sen!2sin!4v1758726702456!5m2!1sen!2sin"
};

// Get the URL for current location or fallback to Chennai
const currentMapUrl = formData.location ? mapUrls[formData.location] : mapUrls["Chennai"];

  return (
    <div className="min-h-screen">
        <Navbar/>
      <SocialWidget />
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8" />
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Ready to take your performance to the next level? Reach out to us and let's start your journey together.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="bg-black text-white p-8 md:w-1/3">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-yellow-400 font-semibold mb-1">Phone</h3>
                    <p>+91 96004 11808</p>
                  </div>
                  <div>
                    <h3 className="text-yellow-400 font-semibold mb-1">Email</h3>
                    <p>working.atra@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="text-yellow-400 font-semibold mb-1">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                      {/* Social Icons - placeholders */}
                      <a href="https://www.instagram.com/atra.ssc/" className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-400/80 transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href="https://wa.me/9600411808" className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-400/80 transition-colors"
                         target="_blank" rel="noopener noreferrer">
                        <span className="sr-only">WhatsApp</span>
                        <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.333 0 2.345.614 4.611 1.778 6.63l-1.867 5.425 5.632-1.84c1.957 1.027 4.16 1.567 6.457 1.567h.001c7.364 0 13.334-5.97 13.334-13.333 0-7.364-5.97-13.334-13.334-13.334zm0 24.001c-1.927 0-3.82-.498-5.487-1.441l-.392-.221-3.336 1.09 1.066-3.093-.256-.404c-1.099-1.736-1.68-3.747-1.68-5.776 0-6.075 4.959-11.033 11.035-11.033 6.075 0 11.034 4.958 11.034 11.033s-4.959 11.033-11.034 11.033zm6.091-8.601c-.333-.167-1.976-.976-2.282-1.089-.306-.111-.528-.167-.749.167-.222.333-.861 1.089-1.056 1.311-.195.222-.389.25-.722.083-.333-.167-1.407-.519-2.68-1.655-.99-.884-1.659-1.974-1.853-2.308-.195-.333-.021-.513.146-.68.15-.149.333-.389.5-.584.167-.195.222-.333.333-.556.111-.222.056-.417-.028-.584-.083-.167-.749-1.805-1.025-2.471-.27-.65-.542-.562-.749-.57l-.639-.012c-.222 0-.584.083-.889.417s-1.167 1.14-1.167 2.777c0 1.637 1.196 3.221 1.364 3.444.167.222 2.356 3.592 5.712 5.032.797.344 1.419.55 1.903.705.799.255 1.526.219 2.099.133.64-.095 1.976-.807 2.292-1.587.306-.78.306-1.449.214-1.587-.092-.138-.306-.222-.639-.389z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                </div>
{/* Map Card */}
<div className="mt-8">
  <h3 className="text-yellow-400 font-semibold mb-4">Our Locations</h3>
  <div className="flex flex-col gap-4">
    {Object.entries(mapUrls).map(([location, url]) => (
      <div key={location} className="rounded-lg overflow-hidden shadow-lg">
        <h4 className="text-black font-semibold text-center py-2 bg-yellow-400">{location}</h4>
        <iframe
          title={location}
          src={url}
          height="200"
          className="w-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    ))}
  </div>
</div>
              </div>

              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold mb-6">Get Started with us – Book a Consultation</h2>
                <p className="mb-8 text-gray-600">
                  Looking to improve your performance, recover from an injury, or just optimize your lifestyle? Fill out this form, and our team will reach out to you for a personalized consultation.
                </p>
                <p className="mb-8 text-sm text-gray-500">
                  All information shared will be kept confidential and used solely for consultation purposes.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        min="1"
                        max="120"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-6">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary"
                          required
                        />
                        <label htmlFor="male" className="ml-2 text-sm text-gray-700">Male</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          onChange={handleChange}
                          className="h-4 w-4 text-primary focus:ring-primary"
                        />
                        <label htmlFor="female" className="ml-2 text-sm text-gray-700">Female</label>
                      </div>
                    </div>
                  </div>
<div>
  <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
    What's your goal with Atra? <span className="text-red-500">*</span>
  </label>
  <select
    id="goal"
    name="goal"
    value={formData.goal}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    required
  >
    <option value="">Select an option</option>
    <option value="Enhance my athletic performance">Enhance my athletic performance</option>
    <option value="Return to my sport post-injury">Return to my sport post-injury</option>
    <option value="Build a consistent fitness routine">Build a consistent fitness routine</option>
    <option value="Manage my weight">Manage my weight</option>
    <option value="Move without pain">Move without pain</option>
    <option value="Improve my nutrition and eating habits">Improve my nutrition and eating habits</option>
    <option value="Other">Other</option>
  </select>

  {formData.goal === "Other" && (
    <input
      type="text"
      placeholder="Please specify your goal"
      value={formData.customGoal}
      onChange={handleChange}
      name="customGoal"
      className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      required
    />
  )}
</div>

                  <div>
                    <label htmlFor="specific" className="block text-sm font-medium text-gray-700 mb-1">
                      Are you looking for something in specific? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="specific"
                      name="specific"
                      value={formData.specific}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="sports_science">Sports Science (Inclusive of S&C, Nutrition, Physiotherapy, Psychology & Sports Medicine)</option>
                      <option value="strength_conditioning">Strength and Conditioning</option>
                      <option value="nutrition">Sports Nutrition</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="sports_medicine">Sports Medicine</option>
                      <option value="sports_psychology">Sports Psychology</option>
                      <option value="curious">I'm just exploring!</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                      Select your preferred training package
                    </label>
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select an option</option>
                      <option value="The Executive Program (1-1 training)">Executive Program (1 on 1 training) - ₹12,000/Month , ₹30,000/Quarter</option>
                      <option value="The Coastal Crew (Group training) 6 am - 7 am">Coast Crew Program(Group training) - ₹4,000/Month , ₹10,000/Quarter</option>
                      <option value="The Partner Program (Semi Private training)">Partner Program (Semi-Private training) - ₹6,500/Month , ₹15,000/Quarter</option>
                      <option value="Home-fit Program (Home training)">Home-fit Program (Home-Training) - ₹15,000/Month , ₹40,000/Quarter</option>
                      <option value="Online training (1-1 training)">Online-training (1 on 1 training) - ₹6,000/Month , ₹15,000/Quarter</option>
                      <option value="Online training (group training)">Online-training (Group training) - ₹4,000/Month , ₹10,000/Quarter</option>
                      <option value="Nutrition Guidance">Nutrition Guidance - Consultation with Report: ₹800, Consultation with Diet Chart: ₹1,500</option>
                      <option value="The Grind Program (1-1 training)">The Grind Program (1 on 1 training) - ₹12,000/Month , ₹30,000/Quarter</option>
                      <option value="The Athlete Tribe (Semi Private training)">The Athlete Tribe (Semi-Private training) -  ₹6,500/Month , ₹15,000/Quarter</option>
                      <option value="Sports Nutrition">Sports Nutrition - Consultation with Report: ₹800, Consultation with Diet Chart: ₹1,500</option>
                      <option value="Performance Psychology">Performance Psychology - Consultation: ₹1,500 </option>
                      <option value="The Re-build Program (1-1 training)">The Rebuild Program (1 on 1 training) - ₹12,000/Month , ₹30,000/Quarter</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mode" className="block text-sm font-medium text-gray-700 mb-1">
                      Mode of sports science consultation <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="mode"
                      name="mode"
                      value={formData.mode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="in_person">In-person</option>
                      <option value="online">Online</option>
                    </select>
                  </div>

  {formData.mode == "in_person" && (
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Location <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a location</option>
                      <option value="chennai">Chennai</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="coimbatore">Coimbatore</option>
                    </select>
                  </div>
  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Your preferred day for a sports science consultation
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred time for consultation
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-yellow-400 hover:bg-yellow-400/90 text-black font-bold py-3 px-8 rounded-md transition-colors"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}