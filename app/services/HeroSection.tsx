'use client';

export default function HeroSection() {
  const handleScroll = () => {
    const section = document.getElementById('services-list');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          {/* <source src="https://videos.pexels.com/video-files/2795405/2795405-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2795405/2795405-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Fallback image if video fails to load */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')`
            }}
          ></div>
        </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Choose the path that fits your journey
        </p>
        <button
          onClick={handleScroll}
          className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
        >
          Explore
        </button>
      </div>
    </section>
  );
}
